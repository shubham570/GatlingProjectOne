var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "8",
        "ok": "8",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "472",
        "ok": "472",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2598",
        "ok": "2598",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1275",
        "ok": "1275",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "703",
        "ok": "703",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1021",
        "ok": "1021",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1851",
        "ok": "1851",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2349",
        "ok": "2349",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2548",
        "ok": "2548",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
    "percentage": 38
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 25
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3,
    "percentage": 38
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.889",
        "ok": "0.889",
        "ko": "-"
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
        "ok": "3",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "472",
        "ok": "472",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1887",
        "ok": "1887",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1089",
        "ok": "1089",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "592",
        "ok": "592",
        "ko": "-"
    },
    "percentiles1": {
        "total": "907",
        "ok": "907",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1397",
        "ok": "1397",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1789",
        "ok": "1789",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1867",
        "ok": "1867",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 33
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 33
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 33
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.333",
        "ok": "0.333",
        "ko": "-"
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
        "total": "637",
        "ok": "637",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2598",
        "ok": "2598",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1386",
        "ok": "1386",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "740",
        "ok": "740",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1134",
        "ok": "1134",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1839",
        "ok": "1839",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2446",
        "ok": "2446",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2568",
        "ok": "2568",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 40
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 20
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2,
    "percentage": 40
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.556",
        "ok": "0.556",
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
