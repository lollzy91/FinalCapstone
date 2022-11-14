package com.techelevator.dao;

import com.techelevator.model.Invite;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PathVariable;

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

    @Override
    public int createInvite(Invite invite) {

        return 0;
    }

    @Override
    public void updateInvite(Invite invite) {
        String sql = "update invites Set (sender_id, receiver_id, location, event_date)" +
                "  VALUES (?,?,?,?) WHERE invite_id = ?";
        jdbcTemplate.update(sql, invite.getSenderId(), invite.getEventDate(), invite.getInviteId());

    }

    @Override
    public void deleteInvite(int inviteId) {
        String sql = "DELETE FROM invites WHERE invite_id = ?";
        jdbcTemplate.update(sql, inviteId);

    }

    @Override
    public Invite getInviteById(@PathVariable int inviteId) throws Exception {
        String sql = "SELECT * FROM invites WHERE invite_id = ?";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, inviteId);
        if (results.next()) {
            return mapRowToInvite(results);
        } else {
            throw new Exception();
        }
    }

    @Override
    public List<Invite> SentInvitesByUserId(int senderId) throws Exception {
        return null;
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
