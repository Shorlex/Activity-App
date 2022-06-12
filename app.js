function reLoad(){
    window.location.reload();}
    var requestOptions = {
          method: "GET",
          redirect: "follow",
        };
        fetch("https://www.boredapi.com/api/activity", requestOptions)
          .then((response) => response.text())
          .then((result) => {
            console.log(result);
            var randomActivity = JSON.parse(result);
            console.log(randomActivity);
            var report =
              "Activity: " +
              randomActivity.activity +
              "<br>" +
              "Type: " +
              randomActivity.type +
              "<br>" +
              "Participant: " +
              randomActivity.participants +
              "<br>" +
              "Price: " +
              randomActivity.price
            document.getElementById("report").innerHTML = report;
          })

          .catch((error) => console.log("error", error));