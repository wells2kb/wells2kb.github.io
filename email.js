var shown = false;
function showHideEmail()
{
  if (shown)
  {
    document.getElementById('email').innerHTML = "";
    shown = false;
  }
  else
  {
    var myEmail = "<a href='mailto:wells2kb@mail.uc.edu'>"
      + "wells2kb@mail.uc.edu"
      + "</a>";
    document.getElementById('email').innerHTML = myEmail;
    shown = true;
  }
}
