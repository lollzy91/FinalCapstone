package com.techelevator.controller;

import com.techelevator.dao.InviteDao;
import com.techelevator.model.Invite;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "")
public class InviteController {

    private InviteDao inviteDao;


    @GetMapping(value = "")
    public List<Invite> getInvitesBySenderId(@PathVariable Integer sender_id) throws Exception {
        List<Invite> invites = null;
        invites = inviteDao.SentInvitesByUserId(sender_id);
        return invites;
    }

    @PostMapping(value = "")
    public int createInvite(@RequestBody Invite invite) {
        int invite_id=inviteDao.createInvite(invite);
        return invite_id;
    }

    @PutMapping(value = "")
    public void updateInviteDate(@RequestBody Invite invite) {
        inviteDao.updateInvite(invite);
    }

    @GetMapping(value = "")
    public Invite getInviteById(@PathVariable Integer inviteId) throws Exception {
        return inviteDao.getInviteById(inviteId);
    }


}
