//nationality method
function nationality(tags)
{
    //List all the Days with array
    var list_nationality = [
        'American',
        'Febuary',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    if(tags == '')
        //If the nationality('') paramenter is empty, add no tags
    {
        var i;
        for (i = 0, l = list_nationality.length, nationality = ""; i < l; i++)
        {
            nationality += list_nationality[i];
        }
    }
    else
        //If the months('option') has paramenter, add the tags to it
    {
        for (i = 0, l = list_nationality.length, nationality = ""; i < l; i++)
        {
            nationality += "<" + tags +">" + list_nationality[i] + "</" + tags +">";
        }
    }

    //You can call the class multiple times
    var multiple_list = document.getElementsByClassName("nationality");
    for (i = 0; i < multiple_list.length; i++)
    {
        multiple_list[i].innerHTML = nationality;
    }
}