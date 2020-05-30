let user = {
    "gender": "male",
    "name": {
      "title": "Mrs",
      "first": "Joel",
      "last": "Bowman"
    },
    "location": {
      "street": {
        "number": 5456,
        "name": "Robinson Rd"
      },
      "city": "Tweed",
      "state": "Queensland",
      "country": "Australia",
    },
    "email": "joel.bowman@example.com",
    "dob": {
      "date": "1958-11-06T07:16:09.288Z",
      "age": 62
    },
    "phone": "06-0374-0865",
    "cell": "0417-933-029",
    "picture": {
      "large": "https://www.modelmanagement.com/images/home/everyone_search.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/80.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/80.jpg"
    },
    "nat": "AU"
  };


  function display_data() {
    
    // var gender = user.gender;
    let {gender, name, phone, location, picture, dob, nat, email } = user;

    document.getElementById("gen").innerHTML = gender;
    document.getElementById('photo').src = picture.large ;
    document.getElementById('mail').innerHTML = email
    document.getElementById('gen').innerHTML = gender
    document.getElementById('add').innerHTML = location.state
    document.getElementById('dob').innerHTML = new Date(dob.date)
    document.getElementById('nation').innerHTML = nat
    document.getElementById('name').innerHTML = name.title + " " + name.first + " " + name.last;

  }

23.4
0
845
  display_data();