$(document).ready(function() {
    $('#calendar').fullCalendar({
        googleCalendarApiKey: 'AIzaSyAMWvTcbCbJpLEyFtCWcDwbyIpcdIaDciw',
        defaultView: 'agendaWeek',
        scrollTime: '09:00:00',
        eventSources: [
          {
              googleCalendarId: 'rocky.edu_sakv6bmfg59lf2dp3a8ogj1608@group.calendar.google.com',
              className: 'rmc-student-events'
          },
          {
              googleCalendarId: 'rocky.edu_2gbenc7go3t1k90k0m3utq7g4o@group.calendar.google.com',
              className: 'master-calendar'
          },
        ]
    });

    $( "#master-calendar" ).click(function() {
      $(".master-calendar").toggle();
      $("#master-calendar").toggleClass('btn-primary btn-default');
    });

    $("#rmc-student-events").click(function() {
      $(".rmc-student-events").toggle();
      $("#rmc-student-events").toggleClass('btn-primary btn-default');
    });

    $("#rmc-sports").click(function() {
      $(".rmc-sports").toggle();
      $("#rmc-sports").toggleClass('btn-primary btn-default');
    });

    $("#first-year-experiance").click(function() {
      $(".first-year-experiance").toggle();
      $("#first-year-experiance").toggleClass('btn-primary btn-default');
    });
});
