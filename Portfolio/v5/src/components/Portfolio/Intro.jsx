var dob = new Date("06/23/2003");
//calculate month difference from current date in time
var month_diff = Date.now() - dob.getTime();
//convert the calculated difference in date format
var age_dt = new Date(month_diff);
//extract year from date
var year = age_dt.getUTCFullYear();
//now calculate the age of the user
var age = Math.abs(year - 1970);
let now = new Date();
let mornin = now.getHours() <= 11;

export default function Intro() {
  return (
    <>
      <div id="intro">
        <div className="right">
          <span className="catchphrase">
            {age} years old programming student
          </span>
          <p>
            {mornin ? "Good Morning" : "Hello there !"} My name is Ethan and as
            said up here I’m an {age} years old programming student. However I
            started to learn programming when I was 14 and between then and
            today I followed an Arts & Craft courses for 3 years at the Louvre.
            I’m eager to knowledge and love to learn knew things everyday.And I
            also have a sharp tongue if something bothers me.
          </p>
        </div>
      </div>
    </>
  );
}
