function length_filter(el, len)
{
    console.log("Starting...")
    var video_container = document.getElementById('videos')
    var videos = video_container.querySelectorAll("a")
    var i;
    // Small=> 0-45 mins
    // Medium=> 45-90 mins
    // Large=> >90 mins
    var min, max;
    min = -1;
    max = 99999;
    var small = document.getElementById('video_filter_s').checked
    var medium = document.getElementById('video_filter_m').checked
    var large = document.getElementById('video_filter_l').checked
    if(small) {
        min = 0;
        max = 45;
    }
    if(medium) {
        if(min == -1) {
            min = 45;
        }
        max = 90;
    }
    if(large) {
        if(min == -1) {
            min = 90;
        }
        max = 9999;
    }
    console.log(min)
    console.log(max)
    for(i=0;i<videos.length; ++i) {
        // var k=videos[i].attributes.vid_length.value
        // console.log(k)
        var video_borders = video_container.children
        console.log(videos[i].attributes.vid_length.value)
        if(videos[i].attributes.vid_length.value < min || videos[i].attributes.vid_length.value > max) {
            // console.log(video_container.querySelectorAll("vid_length" + videos[i].attributes.vid_length.value))
            video_borders[i+2].style.display='none'
            console.log(videos[i])
            // console.log(videos[i].attributes.vid_length)
        }
        else {
            video_borders[i+2].style.display='block'
        }
    }
    // console.log(videos)
    // alert('hello')
    console.log("Ending...")
    // console.log(el.checked)
    // if (el.checked == true) {
    //     document.getElementById('courses').style.visibility='hidden'
    //     console.log('hi1')
    // }
    // else {
    //     console.log('hi')
    //     document.getElementById('courses').style.visibility='visible';
    //     // alert('jhjsd')
    // }
}
function expand_navbar() {
    var x = document.getElementById("id1navig");
    if (x.className === "navigation-bar") {
      x.className += " responsive2";
    } else {
      x.className = "navigation-bar";
    }
  }

  function play_video(el, url)
  {
    document.getElementById('course_video').src = url;
    document.getElementById('player_complete').style.display='block';
  }

function display_classes() {
    document.getElementsByClassName('dropdown-content')[0].style.display='inline-block'
}
function hide_classes() {
    document.getElementsByClassName('dropdown-content')[0].style.display='none'
}