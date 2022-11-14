package com.techelevator.dao;

import com.techelevator.model.Invite;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
@Component
public class JdbcInviteDao implements InviteDao{
    private JdbcTemplate jdbcTemplate;

    public JdbcInviteDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
    @Override
    public List<Invite> getAllInvites(String userName) {
        List<Invite> allInvites = new ArrayList();
        String sql = "SELECT * FROM invites WHERE sender_id = " +
                "(SELECT user_id FROM users WHERE username = ?)";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, userName);
        while(results.next()){
            allInvites.add(mapRowToInvite(results));
        }
        return allInvites;
    };
    @Override
    public void inviteOut(Invite invite) {
        String sql = "START TRANSACTION; " +
                "INSERT INTO invites (sender_id, receiver_id, location, event_date) " +
                " VALUES (?, ?, ?, ?);" +
                "COMMIT;";
        jdbcTemplate.update(sql, invite.getSenderId(), invite.getReceiverId(), invite.getLocation(), invite.getEventDate());

    }
    private Invite mapRowToInvite(SqlRowSet results) {

        Invite invite = new Invite();
        invite.setInviteId(results.getInt("invite_id"));
        invite.setSenderId(results.getInt("sender_id"));
        invite.setEventDate(results.getDate("event_date"));
        invite.setReceiverId(results.getInt("receiver_id"));
        invite.setLocation(results.getString("location"));

        return invite;
    }
}
