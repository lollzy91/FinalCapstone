package com.techelevator.controller;

import com.techelevator.dao.InviteDao;
import com.techelevator.model.Invite;
import com.techelevator.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@CrossOrigin
@RestController
@PreAuthorize("isAuthenticated()")
@RequestMapping(path = "/invites")
public class InviteController {
    @Autowired
    private InviteDao inviteDao;

    public InviteController(InviteDao inviteDao) {
        this.inviteDao = inviteDao;
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Invite> getAllInvites(Principal principal){ return inviteDao.getAllInvites(principal.getName());}
    @RequestMapping(method = RequestMethod.POST)
    public void inviteOut(@RequestBody Invite invite){inviteDao.inviteOut(invite);}
    @RequestMapping(method = RequestMethod.PUT)
    public void updateInvite(@RequestBody Invite invite){inviteDao.updateInvite(invite);}

    @RequestMapping(path = "/getUsers", method = RequestMethod.GET)
    public List<User> getAllUsers(Principal principal){return inviteDao.getUsers(principal.getName());}
}
