function AddressBook(){
    this.addressList = new Array();
    this.initialComplete = false;
};

AddressBook.prototype.getInitialContacts = function(cb) {
    var self = this;

    setTimeout(function(){
        self.initialComplete = true;
        if (cb) {
            return cb();
        }
    }, 3);
};

AddressBook.prototype.addContact = function(contact) {
    this.addressList.push(contact);
};

AddressBook.prototype.getContact = function(index) {
    return this.addressList[index];
};

AddressBook.prototype.deleteContact = function(index){
    this.addressList.splice(index, 1);
};
