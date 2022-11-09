package com.techelevator.dao;
import com.techelevator.model.Invite;

import java.util.List;

public interface InviteDao {

    int createInvite(Invite invite);

    void updateInvite(Invite invite);

    Invite getInviteById(int inviteId) throws Exception;

    List<Invite> SentInvitesByUserId(int senderId) throws Exception;
}
