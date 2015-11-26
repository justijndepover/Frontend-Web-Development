/**
 * Created by justijndepover on 17/11/15.
 */


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
  return "https://farm"+ this.farm +".staticflickr.com/" + this.server + "/" + this.id + "_" + this.secret + ".jpg"
};