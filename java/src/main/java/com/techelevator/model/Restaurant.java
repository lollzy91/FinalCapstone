package com.techelevator.model;

public class Restaurant {

    private String yelpId;
    private int thumbsUp;
    private int thumbsDown;

    public Restaurant(String yelpId, int thumbsUp, int thumbsDown) {
        this.yelpId = yelpId;
        this.thumbsUp = thumbsUp;
        this.thumbsDown = thumbsDown;
    }

    public Restaurant() {

    }

    public String getYelpId() {
        return yelpId;
    }

    public void setYelpId(String yelpId) {
        this.yelpId = yelpId;
    }

    public int getThumbsUp() {
        return thumbsUp;
    }

    public void setThumbsUp(int thumbsUp) {
        this.thumbsUp = thumbsUp;
    }

    public int getThumbsDown() {
        return thumbsDown;
    }

    public void setThumbsDown(int thumbsDown) {
        this.thumbsDown = thumbsDown;
    }
}
