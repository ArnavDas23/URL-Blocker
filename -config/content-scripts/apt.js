// Whitelist
const white_list = [
    "127.0.0.1",
    "accounts.google.com",
    "ags.univariety.com",
    "amazon.in",
    "arnavdas.in",
    "atcoder.jp",
    "calendar.google.com",
    "canva.com",
    "chatgpt.com",
    "chrome-extension://bpmcpldpdmajfigpchkicefoigmkfalc",
    "chrome-extension://cjpalhdlnbpafiamejdnhcphjbkeiagm",
    "chrome-extension://lojgmehidjdhhbmpjfamhpkpodfcodef",
    "chrome-extension://nffaoalbilbmmfgbnbgppjihopabppdk",
    "chrome-extension://nkhpmiodphhapgkgmnmohfkhehoajkdh",
    "chrome://history",
    "chrome://newtab",
    "chrome://password-manager",
    "chrome://settings",
    "chromewebstore.google.com",
    "classroom.google.com",
    "codechef.com",
    "codeforces.com",
    "coderbyte.com",
    "codewars.com",
    "colab.research.google.com",
    "decathlon.in",
    "devarshi.in",
    "discord.com",
    "docs.google.com",
    "drive.google.com",
    "edu.google.com",
    "exercism.org",
    "external:arc-content",
    "facebook.com/codingcompetitions/hacker-cup",
    "file:///media",
    "file://file-manager",
    "file://media-app",
    "file://terminal",
    "files://home",
    "flipkart.com",
    "fonts.google.com",
    "futureskillsprime.in",
    "gamma.app",
    "geeksforgeeks.org",
    "getbootstrap.com",
    "github.com",
    "godaddy.com",
    "gov.in",
    "gravatar.com",
    "gsfcuniversity.ac.in",
    "hackerearth.com",
    "hackerrank.com",
    "hackveda.in",
    "igfonts.io",
    "ikea.com",
    "imaginecup.microsoft.com",
    "instagram.com/accounts",
    "instagram.com/direct",
    "instagram.com/p",
    "instagram.com/pandya_0411",
    "instagram.com/reel",
    "instagram.com/stories",
    "irctc.co.in",
    "javatpoint.com",
    "kaashiv.com",
    "keep.google.com",
    "khanacademy.org",
    "leetcode.com",
    "linkedin.com",
    "lingojam.com",
    "mail.google.com",
    "makemytrip.com",
    "meet.google.com",
    "myaccount.google.com",
    "myntra.com",
    "odoo.com",
    "onlinecourses.nptel.ac.in",
    "openai.com",
    "penguin.linux.test",
    "photos.google.com",
    "piliapp.com",
    "programiz.com",
    "projecteuler.net",
    "rajarshi.me",
    "remotedesktop.google.com",
    "remove.bg",
    "researchgate.net",
    "scholar.google.com",
    "sejda.com",
    "skribbl.io",
    "slidesgo.com",
    "telegram.org",
    "theclubjersey.co.in",
    "thesportstuff.in",
    "topcoder.com",
    "w3schools.com",
    "wordpress.com",
    "web.whatsapp.com"
]
// Constraits of this blocker:
//  - Need the top-level domain (eg. ".com", ".in") of each website
//  - Need to add each sub domain (other than "www.") of a website



setInterval(function() {

    // Check the URL
    let window_url = window.location.href;
    // alert(window_url)



    // Remove "http://", "https://" and "www." for consistency
    window_url = standardize(window_url);
    // alert(window_url)



    // Split the window URL
    let window_array = window_url.split("/");
    // alert(window_array[0])



    let flag = 0;
    for (let i in white_list) {

        let white_list_url = white_list[i];



        // Remove "http://", "https://" and "www." for consistency
        white_list_url = standardize(white_list_url);



        // Split the whitelist URL
        let white_list_array = white_list_url.split("/" || ":");



        // Check if window URL exists in whitelist
        for (let j in white_list_array) {
            if (white_list_array[j] == window_array[j]) {
                flag = 1;
            }
            else {
                flag = 0;
            }
        }



        // If the window URL DOES exist in the whitelist...
        if (flag == 1) {
            // ...exit the loop
            // alert("MATCH FOUND!!!" + "\nList: " + white_list_url + "\nWindow: " + window_url);
            break;
        }
    }



    // If the window URL does NOT exist in the whitelist...
    if (flag == 0) {
        // ...restrict access
        alert("No match found...")
        document.querySelector("html").innerHTML = "";  // Insert a page for blocked URLS   
    }
},


// Repeat every 1 second
1000);



function standardize(x) {

    if (x.startsWith('http://')) {
        x = x.replace('http://', '');
    }
    else if (x.startsWith('https://')) {
        x = x.replace('https://', '');
    }
    if (x.startsWith('www.')) {
        x = x.replace('www.', '');
    }

    return x;
}



/*
// Check the current site in the list
if (white_list.includes(win_host)) {
    // Remove all lines from HTML tag
    // document.querySelector("html").innerHTML = "Don't blame distractions,\nimprove my focus";
    alert("URL included in list:\n" + win_host);
    
    if (white_list.includes(win_path)) {
        alert("BOTH win_host & win_path included:\n" + win_host + win_path);
    } else {
        alert("ONLY win_host included:\n" + win_host + win_path);
    }
} else {
    alert("URL NOT included in list:\n" + win_host);
    // alert("NON included:\n" + win_host + win_path);
}
*/