$.ajax({
    dataType: "json", // Note: dataType should be lowercase "json"
    success: function(data) {
        console.log(data);
        // Assuming data contains an image URL and some text, update the DOM accordingly
        $('#response').html(`<p>${data.answer}</p><img src="${data.image}" alt="Yes or No Image">`);
    },
    error: function(jqXHR, textStatus, errorThrown) { 
        console.error("Error:", textStatus, errorThrown);
        $('#response').html('<p>Sorry, something went wrong. Please try again later.</p>');
    }
});