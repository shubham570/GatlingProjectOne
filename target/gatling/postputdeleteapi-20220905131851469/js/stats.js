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
        "total": "489",
        "ok": "489",
        "ko": "491"
    },
    "maxResponseTime": {
        "total": "597",
        "ok": "597",
        "ko": "570"
    },
    "meanResponseTime": {
        "total": "533",
        "ok": "535",
        "ko": "530"
    },
    "standardDeviation": {
        "total": "39",
        "ok": "43",
        "ko": "32"
    },
    "percentiles1": {
        "total": "529",
        "ok": "527",
        "ko": "530"
    },
    "percentiles2": {
        "total": "570",
        "ok": "570",
        "ko": "550"
    },
    "percentiles3": {
        "total": "588",
        "ok": "592",
        "ko": "566"
    },
    "percentiles4": {
        "total": "595",
        "ok": "596",
        "ko": "569"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5,
    "percentage": 63
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
        "total": "491",
        "ok": "-",
        "ko": "491"
    },
    "maxResponseTime": {
        "total": "570",
        "ok": "-",
        "ko": "570"
    },
    "meanResponseTime": {
        "total": "530",
        "ok": "-",
        "ko": "530"
    },
    "standardDeviation": {
        "total": "32",
        "ok": "-",
        "ko": "32"
    },
    "percentiles1": {
        "total": "530",
        "ok": "-",
        "ko": "530"
    },
    "percentiles2": {
        "total": "550",
        "ok": "-",
        "ko": "550"
    },
    "percentiles3": {
        "total": "566",
        "ok": "-",
        "ko": "566"
    },
    "percentiles4": {
        "total": "569",
        "ok": "-",
        "ko": "569"
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
        "total": "489",
        "ok": "489",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "597",
        "ok": "597",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "535",
        "ok": "535",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "43",
        "ok": "43",
        "ko": "-"
    },
    "percentiles1": {
        "total": "527",
        "ok": "527",
        "ko": "-"
    },
    "percentiles2": {
        "total": "570",
        "ok": "570",
        "ko": "-"
    },
    "percentiles3": {
        "total": "592",
        "ok": "592",
        "ko": "-"
    },
    "percentiles4": {
        "total": "596",
        "ok": "596",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5,
    "percentage": 100
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
