var require = {
    "baseUrl":  ".",
    "paths":  {
        "es5-shim":  "Scripts/es5-shim",
        "jasmine":  "Scripts/jasmine",
        "jasmine-html":  "Scripts/jasmine-html",
        "jQuery":  "Scripts/jquery-1.9.0.min",
        "json2":  "Scripts/json2",
        "knockout":  "Scripts/knockout-2.2.1.debug",
        "knockout.mapping":  "Scripts/knockout.mapping-latest",
        "linqjs":  "Scripts/linq.min",
        "scalejs":  "Scripts/scalejs-0.2.7.1",
        "scalejs.linq-linqjs":  "Scripts/scalejs.linq-linqjs-3.0.3",
        "scalejs.modernui":  "Scripts/scalejs.modernui-0.2.1.17",
        "scalejs.mvvm":  "Scripts/scalejs.mvvm-0.2.3.2",
        "text":  "Scripts/text"
    },
    "scalejs":  {
        "extensions":  [
            "scalejs.linq-linqjs",
            "scalejs.modernui",
            "scalejs.mvvm"
        ]
    },
    "shim":  {
        "jasmine":  {
            "exports":  "jasmine"
        },
        "jasmine-html":  {
            "deps":  [
                "jasmine"
            ]
        },
        "jQuery":  {
            "exports":  "jQuery"
        }
    }
};