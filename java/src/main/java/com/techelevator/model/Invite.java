package com.techelevator.model;


import java.util.Date;

public class Invite  {

    private int inviteId;
    private int senderId;
    private int receiverId;
    private String location;
    private Date eventDate;


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

    public Date getEventDate() {
        return eventDate;
    }

    public void setEventDate(Date eventDate) {
        this.eventDate = eventDate;
    }
    public int getReceiverId() {
        return receiverId;
    }

    public void setReceiverId(int receiverId) {
        this.receiverId = receiverId;
    }


    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Invite() { }

    public Invite( int senderId, String location, Date eventDate) {

        this.senderId = senderId;
        this.location = location ;
        this.eventDate= eventDate ;
    }

    @Override
    public String toString() {

        return "Invite{" +
                "invite_id=" + inviteId +
                ", sender_id=" + senderId +
                ", event_date=" + eventDate +
                ", location=" + location +
                '}';
    }
    

}