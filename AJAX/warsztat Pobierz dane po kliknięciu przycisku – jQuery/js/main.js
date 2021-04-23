
// ______________________________________________________________________________
// pierwsza wersja $.get()
// ______________________________________________________________________________

// $('button').on('click', function(){
//     $.get(' https://akademia108.pl/api/ajax/get-post.php')
//         .done(function(data){
//             $('#userId').text(`User Id: ${data.userId}`);
//             $('#id').text(`Id: ${data.id}`);
//             $('#title').text(`Title: ${data.title}`);
//             $('#body').text(`Body: ${data.body}`);
//         })
//         .fail(function(error) {
//             console.error(error);
//         })
// });



// ______________________________________________________________________________
// druga wersja $.getJSON()
// ______________________________________________________________________________
$(document).ready(function() {
    $('button').on('click', function(){
        $.getJSON(' https://akademia108.pl/api/ajax/get-post.php')
            .done(function(data){
                $('#userId').text(`User Id: ${data.userId}`);
                $('#id').text(`Id: ${data.id}`);
                $('#title').text(`Title: ${data.title}`);
                $('#body').text(`Body: ${data.body}`);
            })
            .fail(function(error) {
                console.error(error);
            });
    });
});


// ______________________________________________________________________________
// wersja $.getJSON()
// ______________________________________________________________________________

// $(document).ready(function() {
    
//     $('#get-data').click(function() {

//     $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
//         .done(function(data) {

//             let pId = $('<p></p>').text(`Post ID: ${data.id}`);
//             let pUserId = $('<p></p>').text(`User ID: ${data.userId}`);
//             let pTitle = $('<p></p>').text(`Title: ${data.title}`);
//             let pBody = $('<p></p>').text(`Body: ${data.body}`);
//             let hr = $('<hr />');

//             let jqBody = $('body');
            
//             jqBody.append(pId);
//             jqBody.append(pUserId);
//             jqBody.append(pTitle);
//             jqBody.append(pBody);
//             jqBody.append(hr);

//             // console.log(data);
//         })
//         .fail(function(error) {
//             console.error(error);
//         });

//     });

// });

