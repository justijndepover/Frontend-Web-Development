/**
 * Created by justijndepover on 27/10/15.
 */


function NoParkingSpotsException(message){

    this.name = "NoParkingSpotsException";
    this.message = message;
    this.stack = (new Error()).stack;

}

NoParkingSpotsException.prototype = Object.create(Error.prototype);
NoParkingSpotsException.prototype.constructor = NoParkingSpotsException;