var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "8",
        "ok": "5",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "428",
        "ok": "451",
        "ko": "428"
    },
    "maxResponseTime": {
        "total": "847",
        "ok": "847",
        "ko": "495"
    },
    "meanResponseTime": {
        "total": "539",
        "ok": "590",
        "ko": "454"
    },
    "standardDeviation": {
        "total": "134",
        "ok": "147",
        "ko": "30"
    },
    "percentiles1": {
        "total": "492",
        "ok": "504",
        "ko": "438"
    },
    "percentiles2": {
        "total": "542",
        "ok": "657",
        "ko": "467"
    },
    "percentiles3": {
        "total": "780",
        "ok": "809",
        "ko": "489"
    },
    "percentiles4": {
        "total": "834",
        "ok": "839",
        "ko": "494"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 13
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 3,
    "percentage": 38
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.143",
        "ok": "0.714",
        "ko": "0.429"
    }
},
contents: {
"req_update-user-a0386": {
        type: "REQUEST",
        name: "update user",
path: "update user",
pathFormatted: "req_update-user-a0386",
stats: {
    "name": "update user",
    "numberOfRequests": {
        "total": "3",
        "ok": "0",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "428",
        "ok": "-",
        "ko": "428"
    },
    "maxResponseTime": {
        "total": "495",
        "ok": "-",
        "ko": "495"
    },
    "meanResponseTime": {
        "total": "454",
        "ok": "-",
        "ko": "454"
    },
    "standardDeviation": {
        "total": "30",
        "ok": "-",
        "ko": "30"
    },
    "percentiles1": {
        "total": "438",
        "ok": "-",
        "ko": "438"
    },
    "percentiles2": {
        "total": "467",
        "ok": "-",
        "ko": "467"
    },
    "percentiles3": {
        "total": "489",
        "ok": "-",
        "ko": "489"
    },
    "percentiles4": {
        "total": "494",
        "ok": "-",
        "ko": "494"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 3,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.429",
        "ok": "-",
        "ko": "0.429"
    }
}
    },"req_create-new-user-40c69": {
        type: "REQUEST",
        name: "create new user",
path: "create new user",
pathFormatted: "req_create-new-user-40c69",
stats: {
    "name": "create new user",
    "numberOfRequests": {
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "451",
        "ok": "451",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "847",
        "ok": "847",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "590",
        "ok": "590",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "147",
        "ok": "147",
        "ko": "-"
    },
    "percentiles1": {
        "total": "504",
        "ok": "504",
        "ko": "-"
    },
    "percentiles2": {
        "total": "657",
        "ok": "657",
        "ko": "-"
    },
    "percentiles3": {
        "total": "809",
        "ok": "809",
        "ko": "-"
    },
    "percentiles4": {
        "total": "839",
        "ok": "839",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4,
    "percentage": 80
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 20
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.714",
        "ok": "0.714",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
