package com.techelevator.model;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.sql.Date;
import java.util.List;

public class Invite  {

    private int inviteId;
    private int senderId;
    private List<User> receivers;
    private List<Restaurant> restaurants;
    private Timestamp eventDate;


    public int getInviteId() {
        return inviteId;
    }

    public void setInviteId(int inviteId) {
        this.inviteId = inviteId;
    }

    public int getSenderId() {
        return senderId;
    }

    public void setSenderId(int senderId) {
        this.senderId = senderId;
    }

    public Timestamp getEventDate() {
        return eventDate;
    }

    public void setEventDate(Timestamp eventDate) {
        this.eventDate = eventDate;
    }
    public List<User> getReceiverId() {
        return receivers;
    }

    public void setReceiverId(List<User> receivers) {
        this.receivers = receivers;
    }


    public List<Restaurant> getRestaurants() {
        return restaurants;
    }

    public void setRestaurants(List<Restaurant> restaurants) {
        this.restaurants = restaurants;
    }

    public Invite() { }

    public Invite(int inviteId, int senderId, List<User> receivers, List<Restaurant> restaurants, Timestamp eventDate) {
        this.inviteId = inviteId;
        this.senderId = senderId;
        this.receivers = receivers;
        this.restaurants = restaurants;
        this.eventDate = eventDate;
    }

    @Override
    public String toString() {

        return "Invite{" +
                "invite_id=" + inviteId +
                ", sender_id=" + senderId +
                ", event_date=" + eventDate +
                ", location=" + restaurants +
                '}';
    }
    

}