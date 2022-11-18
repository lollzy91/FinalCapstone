package com.techelevator.dao;

import com.techelevator.model.Invite;
import com.techelevator.model.Restaurant;
import com.techelevator.model.User;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PathVariable;

import java.math.BigDecimal;
import java.sql.*;
import java.time.Instant;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Component
public class JdbcInviteDao implements InviteDao{
    private JdbcTemplate jdbcTemplate;

    public JdbcInviteDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
    @Override
    public List<Invite> getAllInvites(String userName) {
        List<Invite> allInvites = new ArrayList();
        String sql = "SELECT * FROM invites " +
                "JOIN users_invite ON invites.invite_id = users_invite.event_id " +
                "WHERE invites.sender_id = (SELECT user_id FROM users WHERE username = ?) OR " +
                "users_invite.receiver_id = (SELECT user_id FROM users WHERE username = ?)";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, userName, userName);
        while(results.next()){
            allInvites.add(mapRowToInvite(results));
        }
        return allInvites;
    };

    private List<Restaurant> getRestaurants(int eventId){
        List<Restaurant> restaurants = new ArrayList<>();
        String sql = "SELECT * FROM restaurant_invite WHERE event_id = ?";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, eventId);
        while (results.next()){
            restaurants.add(mapRowToRestaurant(results));
        }
        return restaurants;
    }

    private List<User> getRecipients(int eventId){
      List<User> recipients = new ArrayList<>();
      String sql = "SELECT * FROM users WHERE user_id IN " +
              "(SELECT receiver_id FROM users_invite WHERE event_id = ?)";
      SqlRowSet results = jdbcTemplate.queryForRowSet(sql, eventId);
      while(results.next()){
          recipients.add(mapRowToUser(results));
      }
      return recipients;
    };
    @Override
    public void inviteOut(Invite invite) {
        String sql = "INSERT INTO invites (sender_id, event_date) "
                + "VALUES (?, ?);";
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbcTemplate.update(
                connection -> {
                    PreparedStatement ps =
                            connection.prepareStatement(sql, new String[] {"invite_id"});
                    ps.setInt(1, invite.getSenderId());
                    ps.setTimestamp(2, invite.getEventDate());
                    return ps;
                },
                keyHolder);

        int inviteID = keyHolder.getKey().intValue();
        for(Restaurant restaurant : invite.getRestaurants()){
            String sql2 = "INSERT INTO restaurant_invite (event_id, yelp_id, thumbs_up, thumbs_down) " +
                    "VALUES (?, ?, 0, 0)";
            jdbcTemplate.update(sql2, inviteID, restaurant.getYelpId());
        }
        for (User recipient: invite.getReceiverId()){
            String sql3 = "INSERT INTO users_invite (event_id, receiver_id) " +
                    "VALUES (?, ?)";
            jdbcTemplate.update(sql3, inviteID, recipient.getId());
        }

    }


    @Override
    public void updateInvite(Invite invite) {
        String sql = "update invites Set event_date = ? WHERE invite_id = ?";
        jdbcTemplate.update(sql, invite.getEventDate(), invite.getInviteId());
        for(Restaurant restaurant : invite.getRestaurants()){
            String sql2 = "UPDATE restaurant_invite SET thumbs_up = ?, thumbs_down = ? " +
                    "WHERE event_id = ? AND yelp_id = ?";
            jdbcTemplate.update(sql2, restaurant.getThumbsUp(), restaurant.getThumbsDown(), invite.getInviteId(),  restaurant.getYelpId());
        }

    }

    public List<User> getUsers(String userName){
        List<User> allUsers = new ArrayList<>();
        String sql = "SELECT * FROM users WHERE NOT username = ?";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, userName);
        while(results.next()){
            allUsers.add(mapRowToUser(results));
        }
        return allUsers;
    }

    private Invite mapRowToInvite(SqlRowSet results) {

        Invite invite = new Invite();
        invite.setInviteId(results.getInt("invite_id"));
        invite.setSenderId(results.getInt("sender_id"));
        invite.setEventDate(results.getTimestamp("event_date"));
        invite.setRestaurants(getRestaurants(invite.getInviteId()));
        invite.setReceiverId(getRecipients(invite.getInviteId()));

        return invite;
    }
    private Restaurant mapRowToRestaurant(SqlRowSet results){
        Restaurant restaurant = new Restaurant();
        restaurant.setYelpId(results.getString("yelp_id"));
        restaurant.setThumbsUp(results.getInt("thumbs_up"));
        restaurant.setThumbsDown(results.getInt("thumbs_down"));

        return restaurant;
    };
    private User mapRowToUser(SqlRowSet results){
        User recipient = new User();
        recipient.setId(results.getLong("user_id"));
        recipient.setEmail(results.getString("email"));
        recipient.setUsername(results.getString("username"));

        return recipient;
    }
}
