let interval = setInterval(main, 100);

function createGradeByWeekChart(){
    const canvas = document.querySelector('#gradebyweek');
    let options = {
        // the type of chart we want to use
        type: 'scatter',
        data: {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            datasets: [{
                type: 'line',
                label: 'Line Dataset',
                data: [65, 59, 80, 81, 57, 55, 40, 65, 70, 79],
                fill: false,
                borderColor: 'rgba(142, 68, 173)',
            }, {
                type: 'line',
                label: 'Line Dataset',
                data: [60, 70, 80, 73, 80, 85, 83, 81, 86, 82],
                fill: false,
                borderColor: 'rgb(128, 128, 128)'
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            aspectRatio: 1,
            plugins: {
                title: {
                    display: true,
                    text: "Your Grade By Week",
                },
                legend: {
                    display: false,
                },
            },
        },
    };
    const chart = new Chart(canvas.getContext("2d"), options);
}

function createPointsInClassChart(){
    const canvas = document.querySelector('#pointinclass');
    let options = {
        // the type of chart we want to use
        type: "pie",
        data: {
            datasets: [{
              label: 'My First Dataset',
              data: [40, 60],
              backgroundColor: [
                'rgba(142, 68, 173, 0.8)',
                'rgba(203, 195, 227, 0.8)'
              ],
              hoverOffset: 4
            }]
        },
        options: {
            aspectRatio: 1,
            plugins: {
                title: {
                    display: true,
                    text: "Points in Class",
                },
                legend: {
                    display: false,
                },
            },
        },
    };
    const chart = new Chart(canvas.getContext("2d"), options);
}

function createPointsByCategoryChart(){
    const canvas = document.querySelector('#pointbycat');
    let options = {
        // the type of chart we want to use
        type: "bar",
        data: {
            // which axis shows these labels?
            labels: ["Quizzes", "Labs", "Theory", "Practice"],
            datasets: [
            // is this the top or bottom data set?
            // what happens if there's only 1 dataset?
            {
                label: "Earned",
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: "rgba(142, 68, 173, 0.8)",
            },
            {
                label: "Missed",
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: "rgba(203, 195, 227, 0.8)",
            },
            {
                label: "Ungraded",
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: "#eee",
            },
            ],
        },
        options: {
            scales: {
                y: {
                    stacked: true,
                    grid: {
                        display: false,
                    },
                },
            },
            x: {
                stacked: true,
                grid: {
                    display: false,
                },
            },
            aspectRatio: 1,
            plugins: {
                title: {
                    display: true,
                    text: "Points by Category",
                },
                legend: {
                    display: false,
                },
            },
        },
    };
    const chart = new Chart(canvas.getContext("2d"), options);
}

function main(){
    createGradeByWeekChart();
    createPointsInClassChart();
    createPointsByCategoryChart();
}

/*
Question 1 - What attribute did you use to not block the browser while
parsing JavaScript?
async: this executes the code when it is downloaded and does not block
DOM construction during downloading process.

Question 2 - What do you think is happening when you see the error
message?


Question 3 - What does the setInterval function do?
This function allows us to execute a function or code after every
specific time period.

Question 4 - What would happen if the clearInterval call didn't exist?
The repeating action established by setInterval will go on executing.

Question 5 - What does the 100 in the above code snippet signify?
The time, in milliseconds (thousandths of a second), the timer should
delay in between executions of the specified function or code.

*/