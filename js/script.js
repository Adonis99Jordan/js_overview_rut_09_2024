const userdata = {
    name: 'AZ',
    age: 24,
    phone: '777-777-7777',
    address: '555 coding st',
    info: {
        location: 'Atlanta area',
        hobbies: ['pickleball', 'fishing']
    },
    printage: function () {
        console.log(this.age);
    },
    havebirthday: function() {
        //increase age og user by one 
        this.age++;
        // and print happy bday to the console
        console.log('Happy Birthday!')
    },
    addhobby: function(hobby) {
        // need to refrence an argument that is passed to addhobby (string of a hobby)
        
        //push the argument (hobby) to the info. hobbies array
        this.info.hobbies.push(hobby)
    },
    printhobbies: function () {
        //console.log the hobbies array
        console.log(this.info.hobbies);
        //BONUS - LOOP over the hobbies array and console.log each hobby
        // for (let i = 0; i < this.info.hobbies.length; i++) {
        //     console.log(this.info.hobbies[i]);
        // }

        for (let hobby of this.info.hobbies) {
            console.log(hobby);
        }
    }
};

userdata.addhobby('tennis');
userdata.addhobby('coding');
userdata.addhobby('golf');
userdata.addhobby('hiking');

userdata.printhobbies();
// userdata.printage();

// userdata.havebirthday();

// userdata.printage();