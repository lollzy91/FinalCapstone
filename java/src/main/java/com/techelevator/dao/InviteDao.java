package com.techelevator.dao;
import com.techelevator.model.Invite;
import org.springframework.stereotype.Component;

import java.util.List;

public interface InviteDao {

    void inviteOut(Invite invite);

    int createInvite(Invite invite);
    void updateInvite(Invite invite);
    void deleteInvite(int inviteId);
    Invite getInviteById(int inviteId) throws Exception;
    List<Invite> getAllInvites(String userName);
    List<Invite> SentInvitesByUserId(int senderId) throws Exception;


}
