/**
 * Created by kevinderudder on 17/11/15.
 */

/*
* { "id": "22365791503", "owner": "30994649@N05", "secret": "78efb971e6", "server": "5627", "farm": 6, "title": "Casanova sas", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
* */

function FlickrImage(id, owner, secret, server, farm, title){
    this.id = id;
    this.owner = owner;
    this.secret = secret;
    this.server = server;
    this.farm = farm;
    this.title = title;
}

FlickrImage.prototype.toString = function(){
    return this.title;
};

FlickrImage.prototype.URL = function(){
    return "https://farm" + this.farm + ".staticflickr.com/"+ this.server+ "/"+this.id+"_"+this.secret+".jpg";
};