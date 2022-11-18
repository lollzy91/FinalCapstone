package com.techelevator.dao;
import com.techelevator.model.Invite;
import com.techelevator.model.User;
import org.springframework.stereotype.Component;

import java.util.List;

public interface InviteDao {

    void inviteOut(Invite invite);
    void updateInvite(Invite invite);
    List<Invite> getAllInvites(String userName);
    List<User> getUsers(String userName);


}
