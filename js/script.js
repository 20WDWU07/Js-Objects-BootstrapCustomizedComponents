$(document).ready(function(){

  // declaration of an object
  var cat = {
      id : 101,
      name : 'Furry',
      color : 'brown',
      breed : 'Siamese',
      behaviour : 'agressive'

  };

  console.log(cat);
  // $('#result').html('<h1>' + cat + '</h1>');

  // $('#result').html('<br>' + cat.name)
  //             .append('<br>' + cat.breed)
  //             .append('<br>' + cat.color);

// array of objects

var cats = [
      {
        id : 101,
        name : 'Furry',
        color : 'Brown',
        breed : 'Siamese',
        behaviour : 'agressive',
        photo : 'siamese1.jpg'

      },
      {
        id : 102,
        name : 'Whisky',
        color : 'White',
        breed : 'Persian',
        behaviour : 'Lazy',
        photo : 'persian1.jpg',
        description : ''
      },
      {
        id : 106,
        name : 'Frank',
        color : 'Brown',
        breed : 'Persian',
        behaviour : 'Lazy',
        photo : 'persian2.jpeg'
      },
      {
        id : 107,
        name : 'Puffy',
        color : 'White',
        breed : 'Persian',
        behaviour : 'Lazy',
        photo : 'persian3.jpeg'
      },
      {
        id : 108,
        name : 'New5',
        color : 'Combined',
        breed : 'Persian',
        behaviour : 'Lazy',
        photo : 'persian4.jpeg'
      },
      {
        id : 109,
        name : 'Ferero',
        color : 'white',
        breed : 'Persian',
        behaviour : 'Lazy',
        photo : 'persian5.jpeg'
      },
      {
        id : 103,
        name : 'Raggy',
        color : 'White',
        breed : 'Rag Doll',
        behaviour : 'agressive',
        photo : 'ragdoll1.webp'

      },
      {
        id : 104,
        name : 'Coony',
        color : 'Black',
        breed : 'Maine Coon',
        behaviour : 'friendly',
        photo : 'maine-coon1.jpeg'

      },
      {
        id : 105,
        name : 'Foresty',
        color : 'Brown',
        breed : 'Norwegian Forest',
        behaviour : 'Cool',
        photo : 'norwegian-forest1.jpg'

      }

];
//access properties of objects using index number
// $('#result').html('<br>' + cats[0].name)
//             .append('<br>' + cats[0].breed)
//             .append('<br>' + cats[0].color)
//             .append('<br>'+ '<br>' + cats[1].name)
//             .append('<br>' + cats[1].breed)
//             .append('<br>' + cats[1].color);
//


var i = 0;
for (i = 0 ; i < cats.length; i++){

  // own style
  // $('#result').append('<div class="row clearfix border border-danger m-2 p-2">' +
  //
  //                     '<div class="col-md-6">' +
  //                       '<h1>' + cats[i].name +   '</h1>' +
  //                       '<h2>' + cats[i].breed + '</h2>' +
  //                        '<h3>' + cats[i].color + '</h3>' +
  //                        '<h5>' + cats[i].behaviour + '</h5>' +
  //
  //                     '</div>' +
  //
  //                     '<div class="col-md-6">' +
  //                       '<img src="images/' + cats[i].photo + '" alt=" ' + cats[i].breed + '" class="img-thumbnail" > ' +
  //                     '</div>' +
  //
  //                     '</div>'
  // ); //append ends here
  //

  //bootstrap cards to $display
  $('#result').append( '<div class="col-md-6 mb-2 pl-5 ">' +
                          '<div class="card text-danger" style="width: 18rem;">' +
                             '<img src="images/' + cats[i].photo + '" class="card-img-top" alt="' + cats[i].breed + '">' +
                             '<div class="card-body">' +
                              '<h1 class="card-title">'+ cats[i].breed + '</h1>' +
                              '<p class="card-text text-dark">Name : ' + ' ' + '<span class="text-primary">' + cats[i].name + '</span> <br></p>' +
                               '<p class="card-text text-dark">Color : ' + ' ' + '<span class="text-primary">' + cats[i].color + '</span> <br></p>' +
                               '<p class="card-text text-dark">Behaviour : ' + ' ' + '<span class="text-primary">' + cats[i].behaviour + '</span> <br></p>' +

                              '<button id="' + cats[i].id + '" type="button" class="btn btn-primary moreDetails" data-toggle="modal" data-target="#exampleModal">More'+ " " + cats[i].breed + '</button>' +
                            '</div>' +
                          '</div>' +
                      '</div>'
                  ); //append ends here

} //end of for loop


//modal
$('.moreDetails').click(function(){
  $('#imageCat').text(' '); //clearing the content
  console.log(this.id);

  var i=0;
  for (i = 0; i < cats.length; i++) {

    if (parseInt(this.id) === cats[i].id) {
      console.log(cats[i].id, cats[i].name, cats[i].breed);
        $('#exampleModalLabel').text(cats[i].breed);
        //append will keep  adding to existing content, so clear if you want
        //or else use html to replace existing content
        $('#imageCat').append('<img class="img-fluid" src="images/' + cats[i].photo + '" alt="' + cats[i].breed + '"/>');
    } //end of if statement
  }//end of for statement
}); // end of moreDetails click event

}); //document.ready()
