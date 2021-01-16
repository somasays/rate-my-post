// Set default date and time to current UTC
$(document).ready(function () {
    var date = new Date();
    $("#postTime").val(`${date.getUTCHours().toString().padStart(2, '0')}:${date.getUTCMinutes().toString().padStart(2, '0')}`); // HH:MI
    $("#postDate").val(`${date.getUTCFullYear().toString()}-${(date.getUTCMonth() + 1).toString().padStart(2, '0')}-${date.getUTCDate().toString().padStart(2, '0')}`); // YYYY-MM-DD
});


// Load forum names
$(document).ready(function () {
    $.get('forums.txt', function (data) {
        var lines = data.split("\n");
        lines.sort();
        $.each(lines, function (index, value) {
            $('#forumName').append('<option value="' + value + '">' + value + '</option>');
        });

    });
});


// API parameters
var region = "us-east-1";
var stageName = "prod";
var apiId = "bvffsnbxvc";
var baseUrl = `https://${apiId}.execute-api.${region}.amazonaws.com/${stageName}/`;


// Run lambda function on button click
$(document).ready(function () {
    $("#submitPost").click(function (event) {
        event.preventDefault();
        $("#postResponse").html('<div class="text-center"><i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i></div>');
        var form = $("#userForm")[0];
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        else {
            var inputData = {
                "forumName": $("#forumName").val(),
                "userId": $("#userId").val(),
                "postTitle": $("#postTitle").val(),
                "postBody": $("#postBody").val(),
                "postTags": $("#postTags").val(),
                "postTime": $("#postTime").val(),
                "postDate": $("#postDate").val(),
            };

            $.ajax({
                url: baseUrl,
                type: 'POST',
                dataType: "json",
                crossDomain: "true",
                data: JSON.stringify(inputData),
                contentType: 'application/json; charset=utf-8',
                success: function (response) {
                    var probOutput = (parseFloat(response['probability']) * 100).toFixed(2) + "%";
                    var userName = response['user_name'];
                    if (userName == "") {
                        userOutput = `<small class="text-muted">User not found. It hasn't been registered on <i>${inputData['forumName']}</i> yet or wrong user ID was provided.</small>`
                    } else {
                        userOutput = `<small class="text-muted">User found: <i>${userName}</i>.</small>`
                    }
                    var tags = response['tags'];
                    var tagResponse = "";
                    Object.keys(tags).forEach(function (t) {
                        if (tags[t] == false) {
                            tagResponse += `Tag not found: <i>${t}</i>.<br>`
                        }
                    })
                    if (tagResponse != "") {
                        tagResponse = `<small class="text-muted">${tagResponse}</small>`
                    }
                    var result = `<div class="card bg-light"><div class="card-body">${userOutput}<br>${tagResponse}<br>Estimated probability of your question receiving accepted answer within 7 days is <b>~${probOutput}</b></div></div>`;
                    $("#postResponse").html(result);
                },
                error: function () {
                    alert("ERROR");
                    var result = `<div class="card bg-light"><div class="card-body">Estimation is not available at the moment. Please check <a href=https://github.com/tzaton/rate-my-post>GitHub</a>.</div></div>`;
                    $("#postResponse").html(result);
                }
            });
        }
        form.classList.add('was-validated');
    });
});
