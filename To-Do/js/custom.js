$("form").submit(function(e) {

    e.preventDefault();
    var model = $("input[name='model']").val();
    var number = $("input[name='number']").val();

    $(".data-table tbody").append("<tr class='new_value' data-model='" + model + "' data-number='" + number + "' data-model-old='" + model + "' data-number-old='" + number + "'> <td class='input-edit'><input type='text' name='edit_model' value='" + model + "'></td><td class='input-edit'><input type='number' name='edit_number' value='" + number + "'></td><td><button class='btn btn-update'>Update</button><button class='btn btn-reset'>Reset</button><button class='btn btn-delete'>Delete</button></td></tr>");
    $("input[name='model']").val('');
    $("input[name='number']").val('');


    $('#success_message').fadeIn().html(`<div>Created Succesfully</div>`);
    setTimeout(function() {
        $('#success_message').fadeOut("slow");
    }, 1500 );

});

$("body").on("click", ".btn-delete", function() {

    $(this).parents("tr").remove();

    $('#success_message').fadeIn().html(`<div>Deleted Succesfully</div>`);
    setTimeout(function() {
        $('#success_message').fadeOut("slow");
    }, 2000 );

});

$("body").on("click", ".btn-reset", function() {

    var model = $(this).parents("tr").attr('data-model-old');
    var number = $(this).parents("tr").attr('data-number-old');

    $(this).parents("tr").find("td:eq(0)").html('<input type="text" name="edit_model" value="' + model + '">');
    $(this).parents("tr").find("td:eq(1)").html('<input type="number" name="edit_number" value="' + number + '">');
    $(this).parents("tr").attr('data-model', model);
    $(this).parents("tr").attr('data-number', number);
    $(this).parents("tr").find("td:eq(0)").addClass("input-edit");
    $(this).parents("tr").find("td:eq(1)").addClass("input-edit");

    $('#success_message').fadeIn().html(`<div>Data has been Rest Succesfully</div>`);
    setTimeout(function() {
        $('#success_message').fadeOut("slow");
    }, 2000 );

});

$("body").on("click", ".input-edit", function() {

    var model = $(this).parents("tr").attr('data-model');
    var number = $(this).parents("tr").attr('data-number');

    $(this).parents("tr").find("td:eq(0)").html('<input type="text" name="edit_model" value="' + model + '">');
    $(this).parents("tr").find("td:eq(1)").html('<input type="number" name="edit_number" value="' + number + '">');
    $(this).parents("tr").find("td:eq(0)").removeClass("input-edit");
    $(this).parents("tr").find("td:eq(1)").removeClass("input-edit");
});

$("body").on("click", ".btn-update", function() {

    var model = $(this).parents("tr").find("input[name='edit_model']").val();
    var number = $(this).parents("tr").find("input[name='edit_number']").val();

    $(this).parents("tr").find("td:eq(0)").html('<input type="text" name="edit_model" value="' + model + '">');
    $(this).parents("tr").find("td:eq(1)").html('<input type="number" name="edit_number" value="' + number + '">');
    $(this).parents("tr").attr('data-model', model);
    $(this).parents("tr").attr('data-number', number);
    $(this).parents("tr").find("td:eq(0)").addClass("input-edit");
    $(this).parents("tr").find("td:eq(1)").addClass("input-edit");

    $('#success_message').fadeIn().html(`<div>Updated Succesfully</div>`);
    setTimeout(function() {
        $('#success_message').fadeOut("slow");
    }, 1500 );
});
