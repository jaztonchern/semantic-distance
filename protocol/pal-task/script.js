// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "PAL task",
    "description": "Paired associates learning task, using template by Felix Ludwig and Felix Henninger on Lab.js",
    "repository": "",
    "contributors": "Felix Ludwig\nFelix Henninger\nJazton Chern"
  },
  "parameters": {},
  "files": {},
  "messageHandlers": {
    "epilogue": function anonymous() {
var resultJson = study.options.datastore.exportJson();
jatos.submitResultData(resultJson, jatos.startNextComponent);
}
  },
  "responses": {},
  "content": [
    {
      "type": "lab.html.Screen",
      "responses": {
        "keypress(Space)": "Continue"
      },
      "messageHandlers": {},
      "title": "Welcome",
      "content": "\u003Cheader\u003E \u003Ch2\u003E Welcome! \u003C\u002Fh2\u003E \u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv class=\"w-l text-left\" style=\"display: block\"\u003E\r\n    \u003Ch4\u003E RN7: Word Associations in Semantic Networks \u003C\u002Fh4\u003E\r\n    \u003Cp\u003E\r\n      This study will take around 30 minutes. \u003Cbr\u003E\r\n      Before the study begins, please read the instructions provided in the following pages. \u003Cbr\u003E      \r\n    \u003C\u002Fp\u003E\r\n    \u003Cp class=\"font-weight-bold\"\u003E\r\n      Do remember that if you are unable to provide consent to any of the points in the following pages, you must contact the principal investigator immediately to withdraw from the study.\r\n    \u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Please press \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E to continue.\r\n\u003C\u002Ffooter\u003E",
      "parameters": {},
      "files": {}
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "PIS & CF",
      "content": [
        {
          "type": "lab.html.Form",
          "content": "\u003C!-- Consent declaration --\u003E\n\u003Cheader\u003E \u003Ch1\u003E Participant Information Sheet \u003C\u002Fh1\u003E\u003C\u002Fheader\u003E\n\n\u003Ch2 align=\"center\"\u003EThe following is the participant's information sheet. Please read the sheet carefully.\u003C\u002Fh2\u003E\n\n\u003Cp align=\"center\"\u003E \n  \u003Cimg src=\"${ this.files['PIS.png'] }\" draggable=\"false\"\u003E\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cfooter class=\"content-horizontal-right\"\u003E\n  By clicking continue, you acknowledge that you have read and understood the information provided above.\n  \u003Cbutton id=\"continue\" type=\"submit\"\u003EContinue &rarr;\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E\n\n\u003C\u002Fmain\u003E",
          "parameters": {},
          "responses": {
            "click button#continue": "next"
          },
          "messageHandlers": {},
          "title": "Participant Information Sheet",
          "files": {
            "PIS.png": "embedded\u002F7a5fc263aae1250d8db148bc1a92f0088bda65883f699df82d76168fc9416b7a.png"
          }
        },
        {
          "type": "lab.html.Form",
          "content": "\u003C!-- Consent declaration --\u003E\n\u003Cheader\u003E \u003Ch1\u003E Participant Consent Form \u003C\u002Fh1\u003E\u003C\u002Fheader\u003E\n\n\u003Ch2 align=\"center\"\u003EThe following is the participant's consent form. Please read the sheet carefully.\u003C\u002Fh2\u003E\n\n\u003Cp align=\"center\"\u003E \n  \u003Cimg src=\"${ this.files['CF1.jpg'] }\" draggable=\"false\"\u003E\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Ch2 align=\"center\"\u003EYou will now be required to provide your consent prior to participating in this study.\u003C\u002Fh2\u003E\n\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv class=\"w-l text-left\" style=\"display: block\"\u003E\n    \u003Cp style=\"text-align:left; line-height: 2\"\u003E\n      Protocol title: \u003Cbr\u003E\n      \u003Cbr\u003E\n      The Influence of Semantic Network Properties on Paired-Associates Learning Tasks \u003Cbr\u003E\n      \u003Cbr\u003E\n      Principal Investigator: \u003Cbr\u003E\n      \u003Cbr\u003E\n      Name: Jazton Chern Jie Sern \u003Cbr\u003E\n      Contact No.: (+65) 83226303 \u003Cbr\u003E\n      Email: jazton@nus.edu.sg \u003Cbr\u003E\n      Organisation: National University of Singapore \u003Cbr\u003E\n      \u003Cbr\u003E\n      I hereby acknowledge that:      \n    \u003C\u002Fp\u003E\n\n    \u003Cp class=\"font-weight-bold\"\u003E\n      Reminder: If you are unable to provide consent, do contact the principal investigator immediately to withdraw from the study.\n    \u003C\u002Fp\u003E\n\n    \u003Cform id=\"consent\"\u003E\n      \u003Ctable\u003E\n       \n        \u003C!-- Q1 --\u003E\n        \u003Ctr style=\"height: 100px\"\u003E\n          \u003Ctd class=\"font-weight-bold\"\u003E\n            1.\tI have agreed to take part in the above research. \n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cinput type=\"radio\" id=\"yes1\" name=\"Q1\" value=\"yes\" required\u003E\n            \u003Clabel for=\"yes1\"\u003E\u003Cb\u003EI agree.\u003C\u002Fb\u003E\u003C\u002Flabel\u003E\u003Cbr\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n        \n        \u003C!-- Q2 --\u003E\n        \u003Ctr style=\"height: 100px\"\u003E\n          \u003Ctd class=\"font-weight-bold\"\u003E\n            2.\tI have received a copy of this information sheet that explains the use of my data in this research. I understand its contents and agree to donate my data for the use of this research.\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cinput type=\"radio\" id=\"yes2\" name=\"Q2\" value=\"yes\" required\u003E\n            \u003Clabel for=\"yes2\"\u003E\u003Cb\u003EI agree.\u003C\u002Fb\u003E\u003C\u002Flabel\u003E\u003Cbr\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n\n        \u003C!-- Q3 --\u003E\n        \u003Ctr style=\"height: 100px\"\u003E\n          \u003Ctd class=\"font-weight-bold\"\u003E\n            3.\tI can withdraw from the research at any point of time before or during the study, or within 48 hours of completing the study, by informing the Principal Investigator and all my data will be discarded.\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cinput type=\"radio\" id=\"yes3\" name=\"Q3\" value=\"yes\" required\u003E\n            \u003Clabel for=\"yes3\"\u003E\u003Cb\u003EI agree.\u003C\u002Fb\u003E\u003C\u002Flabel\u003E\u003Cbr\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n\n        \u003C!-- Q4 --\u003E\n        \u003Ctr style=\"height: 100px\"\u003E\n          \u003Ctd class=\"font-weight-bold\"\u003E\n            4.\tI will not have any financial benefits that result from the commercial development of this research. \n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cinput type=\"radio\" id=\"yes4\" name=\"Q4\" value=\"yes\" required\u003E\n            \u003Clabel for=\"yes4\"\u003E\u003Cb\u003EI agree.\u003C\u002Fb\u003E\u003C\u002Flabel\u003E\u003Cbr\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n\n        \u003C!-- Q5 --\u003E\n        \u003Ctr style=\"height: 100px\"\u003E\n          \u003Ctd class=\"font-weight-bold\"\u003E\n            5.  I consent to have the coded data made available for future research studies. This will be subject to an Institutional Review Board’s approval.  \n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cinput type=\"radio\" id=\"yes5\" name=\"Q5\" value=\"yes\" required\u003E\n            \u003Clabel for=\"yes5\"\u003E\u003Cb\u003EI agree.\u003C\u002Fb\u003E\u003C\u002Flabel\u003E\u003Cbr\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n\n        \u003C!-- Column balance --\u003E\n        \u003Ccolgroup\u003E\n          \u003Ccol style=\"width: 45%\"\u003E\n          \u003Ccol style=\"width: 65%\"\u003E\n        \u003C\u002Fcolgroup\u003E\n      \u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n    \u003Cp class=\"font-weight-bold\" style=\"font-size:18px\"\u003E\n      Reminder: If you do not agree to any of the above, please feel free to stop the study and contact the principal investigator.\n    \u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"content-vertical-center content-horizontal-right\"\u003E\n  \u003Cbutton type=\"submit\" form=\"consent\"\u003EContinue &rarr;\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E",
          "parameters": {},
          "responses": {
            "": ""
          },
          "messageHandlers": {},
          "title": "Consent form",
          "files": {
            "CF1.jpg": "embedded\u002Fb783b32b987179410ce45893f5f96ef6258e8c0ba03497a49da2ae273e5ed7ba.jpg"
          }
        }
      ]
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "cue": "apple",
          "response": "scrones"
        },
        {
          "cue": "orange",
          "response": "clartle"
        },
        {
          "cue": "grape",
          "response": "dramens"
        }
      ],
      "responses": {
        "": ""
      },
      "messageHandlers": {},
      "title": "Trial Loop",
      "sample": {
        "n": "9",
        "mode": "draw"
      },
      "parameters": {},
      "files": {},
      "indexParameter": "count",
      "shuffleGroups": [
        [
          "response"
        ]
      ],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Sequence",
        "content": [
          {
            "type": "lab.html.Screen",
            "responses": {
              "keypress(Space)": "Continue"
            },
            "messageHandlers": {},
            "title": "Learning phase instructions",
            "content": "\u003Cheader\u003E\r\n  \u003Ch2\u003EInstructions\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv class=\"w-m text-justify\"\u003E\r\n    \u003Cp\u003EYour task in this study is to remember word pairs.\r\n    We'll first show you two words at a time, and later ask you\r\n    to recall these words in combination.\u003C\u002Fp\u003E\r\n    \u003Cp\u003EOnce you continue, word pairs will be presented to\r\n    you in succession. Are you ready?\u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Please press \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E to continue.\r\n\u003C\u002Ffooter\u003E",
            "parameters": {},
            "files": {},
            "skip": "${ parameters.count \u003E 0 }"
          },
          {
            "type": "lab.html.Screen",
            "responses": {
              "": ""
            },
            "messageHandlers": {},
            "title": "Word pair presentation",
            "content": "\u003Cheader\u003E\r\n  \u003Ch2\u003ELearning phase\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E \r\n  \u003Ctable class=\"table-plain w-m\" style=\"font-size: 2rem;\"\u003E\r\n    \u003Ctr\u003E\r\n      \u003Ctd style=\"width: 200px\"\u003E${ parameters.cue }\u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E &mdash; \u003C\u002Ftd\u003E\r\n      \u003Ctd style=\"width: 200px\"\u003E${ parameters.response }\u003C\u002Ftd\u003E\r\n    \u003C\u002Ftr\u003E\r\n  \u003C\u002Ftable\u003E  \r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Please memorize this pair of words.\r\n\u003C\u002Ffooter\u003E",
            "timeout": "4000",
            "parameters": {},
            "files": {},
            "skip": "${ parameters.count \u003E 5 }"
          },
          {
            "type": "lab.html.Form",
            "responses": {},
            "messageHandlers": {},
            "title": "Recall screen",
            "content": "\u003Cheader\u003E\r\n  \u003Ch2\u003ERecall phase\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E \r\n  \u003Cform\u003E\r\n\r\n    \u003Ctable class=\"table-plain stimulus\"\u003E\r\n      \u003Ctr\u003E\r\n        \u003Ctd style=\"width: 50%\"\u003E\r\n          ${ parameters.cue }\r\n        \u003C\u002Ftd\u003E\r\n        \u003Ctd\u003E\r\n          &mdash;\r\n        \u003C\u002Ftd\u003E\r\n        \u003Ctd style=\"width: 50%\"\u003E\r\n          \u003Cinput type=\"text\" name=\"response\" autocomplete=\"off\" required class=\"w-100\"\u003E\r\n        \u003C\u002Ftd\u003E\r\n      \u003C\u002Ftr\u003E\r\n      \u003Ctr\u003E\r\n        \u003Ctd\u003E\u003C\u002Ftd\u003E\r\n        \u003Ctd\u003E\r\n          \u003Cbutton type=\"submit\"\u003ESubmit\u003C\u002Fbutton\u003E\r\n        \u003C\u002Ftd\u003E\r\n        \u003Ctd\u003E\u003C\u002Ftd\u003E\r\n      \u003C\u002Ftr\u003E\r\n    \u003C\u002Ftable\u003E\r\n\r\n  \u003C\u002Fform\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Please enter the missing word in the provided field. \u003Cbr\u003E\r\n  If you cannot recall the answer, please indicate \"IDK\".\r\n\u003C\u002Ffooter\u003E",
            "parameters": {},
            "files": {},
            "skip": "${ parameters.count \u003E 2 }"
          },
          {
            "type": "lab.html.Screen",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Blank screen",
            "content": "\u003Cheader\u003E\r\n  \u003Ch2\u003ELearning phase\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E \r\n  \u003Ctable class=\"table-plain w-m\" style=\"font-size: 2rem;\"\u003E\r\n\r\n  \u003C\u002Ftable\u003E  \r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Please memorize this pair of words.\r\n\u003C\u002Ffooter\u003E",
            "timeout": "500",
            "skip": "${ parameters.count \u003E 5 }"
          },
          {
            "type": "lab.html.Screen",
            "responses": {
              "keypress(Space)": "Continue"
            },
            "messageHandlers": {},
            "title": "Recall phase instructions",
            "content": "\u003Cheader\u003E \u003Ch2\u003E Recall phase \u003C\u002Fh2\u003E \u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv class=\"w-m text-justify\"\u003E\r\n    We'll now ask you to recall the words you have just seen in pairs. \u003Cbr\u003E\r\n    One word will be shown, and we'd ask you to fill in the second. \u003Cbr\u003E\r\n    If you cannot recall the answer, please indicate \"IDK\".\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Please press \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E to continue.\r\n\u003C\u002Ffooter\u003E",
            "parameters": {},
            "files": {},
            "skip": "${ parameters.count != 6 }"
          },
          {
            "type": "lab.html.Form",
            "responses": {},
            "messageHandlers": {},
            "title": "Recall screen",
            "content": "\u003Cheader\u003E\r\n  \u003Ch2\u003ERecall phase\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E \r\n  \u003Cform\u003E\r\n\r\n    \u003Ctable class=\"table-plain stimulus\"\u003E\r\n      \u003Ctr\u003E\r\n        \u003Ctd style=\"width: 50%\"\u003E\r\n          ${ parameters.cue }\r\n        \u003C\u002Ftd\u003E\r\n        \u003Ctd\u003E\r\n          &mdash;\r\n        \u003C\u002Ftd\u003E\r\n        \u003Ctd style=\"width: 50%\"\u003E\r\n          \u003Cinput type=\"text\" name=\"response\" autocomplete=\"off\" required class=\"w-100\"\u003E\r\n        \u003C\u002Ftd\u003E\r\n      \u003C\u002Ftr\u003E\r\n      \u003Cp\u003E\r\n        scrones clartle dramens\r\n      \u003C\u002Fp\u003E\r\n      \u003Ctr\u003E\r\n        \u003Ctd\u003E\u003C\u002Ftd\u003E\r\n        \u003Ctd\u003E\r\n          \u003Cbutton type=\"submit\"\u003ESubmit\u003C\u002Fbutton\u003E\r\n        \u003C\u002Ftd\u003E\r\n        \u003Ctd\u003E\u003C\u002Ftd\u003E\r\n      \u003C\u002Ftr\u003E\r\n    \u003C\u002Ftable\u003E\r\n\r\n  \u003C\u002Fform\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Please enter the missing word in the provided field. \u003Cbr\u003E\r\n  If you cannot recall the answer, please indicate \"IDK\".\r\n\u003C\u002Ffooter\u003E",
            "parameters": {},
            "files": {},
            "skip": "${ parameters.count \u003C 6 }"
          },
          {
            "type": "lab.html.Screen",
            "responses": {
              "": ""
            },
            "messageHandlers": {},
            "title": "Wait screen",
            "content": "\u003Cheader\u003E\n  \u003Ch2\u003ERecall phase\u003C\u002Fh2\u003E\n\u003C\u002Fheader\u003E\n\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E \n  \u003Ctable class=\"table-plain w-m\" style=\"font-size: 2rem;\"\u003E\n\n  \u003C\u002Ftable\u003E \n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  Please wait...\n\u003C\u002Ffooter\u003E\n",
            "timeout": "500",
            "parameters": {},
            "files": {},
            "skip": "${ parameters.count \u003C 6 }"
          }
        ]
      }
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "cue": "modesty",
          "response": "pheties"
        },
        {
          "cue": "broker",
          "response": "drusier"
        },
        {
          "cue": "olive",
          "response": "blerved"
        },
        {
          "cue": "poised",
          "response": "drodged"
        },
        {
          "cue": "mutant",
          "response": "tossens"
        },
        {
          "cue": "bloom",
          "response": "trapely"
        },
        {
          "cue": "harass",
          "response": "nithter"
        },
        {
          "cue": "currency",
          "response": "achirin"
        },
        {
          "cue": "anguish",
          "response": "dradden"
        },
        {
          "cue": "pageant",
          "response": "tremish"
        }
      ],
      "responses": {
        "": ""
      },
      "messageHandlers": {},
      "title": "Experimental Loop 1",
      "sample": {
        "n": "30",
        "mode": "draw"
      },
      "parameters": {},
      "files": {},
      "indexParameter": "count",
      "shuffleGroups": [
        [
          "response"
        ]
      ],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Sequence",
        "content": [
          {
            "type": "lab.html.Screen",
            "responses": {
              "keypress(Space)": "Continue"
            },
            "messageHandlers": {},
            "title": "Learning phase instructions",
            "content": "\u003Cheader\u003E\r\n  \u003Ch2\u003EInstructions\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv class=\"w-m text-justify\"\u003E\r\n    \u003Cp\u003EThat is the end of the trial.\u003C\u002Fp\u003E\r\n    \u003Cp\u003EYour task in this study will now begin proper.\u003C\u002Fp\u003E\r\n    \u003Cp\u003EOnce you continue, word pairs will be presented to\r\n    you in succession. Are you ready?\u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Please press \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E to continue.\r\n\u003C\u002Ffooter\u003E",
            "parameters": {},
            "files": {},
            "skip": "${ parameters.count \u003E 0 }"
          },
          {
            "type": "lab.html.Screen",
            "responses": {
              "": ""
            },
            "messageHandlers": {},
            "title": "Word pair presentation",
            "content": "\u003Cheader\u003E\r\n  \u003Ch2\u003ELearning phase\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E \r\n  \u003Ctable class=\"table-plain w-m\" style=\"font-size: 2rem;\"\u003E\r\n    \u003Ctr\u003E\r\n      \u003Ctd style=\"width: 200px\"\u003E${ parameters.cue }\u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E &mdash; \u003C\u002Ftd\u003E\r\n      \u003Ctd style=\"width: 200px\"\u003E${ parameters.response }\u003C\u002Ftd\u003E\r\n    \u003C\u002Ftr\u003E\r\n  \u003C\u002Ftable\u003E  \r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Please memorize this pair of words.\r\n\u003C\u002Ffooter\u003E",
            "timeout": "4000",
            "parameters": {},
            "files": {},
            "skip": "${ parameters.count \u003E 19 }"
          },
          {
            "type": "lab.html.Form",
            "responses": {},
            "messageHandlers": {},
            "title": "Recall screen",
            "content": "\u003Cheader\u003E\r\n  \u003Ch2\u003ERecall phase\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E \r\n  \u003Cform\u003E\r\n\r\n    \u003Ctable class=\"table-plain stimulus\"\u003E\r\n      \u003Ctr\u003E\r\n        \u003Ctd style=\"width: 50%\"\u003E\r\n          ${ parameters.cue }\r\n        \u003C\u002Ftd\u003E\r\n        \u003Ctd\u003E\r\n          &mdash;\r\n        \u003C\u002Ftd\u003E\r\n        \u003Ctd style=\"width: 50%\"\u003E\r\n          \u003Cinput type=\"text\" name=\"response\" autocomplete=\"off\" required class=\"w-100\"\u003E\r\n        \u003C\u002Ftd\u003E\r\n      \u003C\u002Ftr\u003E\r\n      \u003Ctr\u003E\r\n        \u003Ctd\u003E\u003C\u002Ftd\u003E\r\n        \u003Ctd\u003E\r\n          \u003Cbutton type=\"submit\"\u003ESubmit\u003C\u002Fbutton\u003E\r\n        \u003C\u002Ftd\u003E\r\n        \u003Ctd\u003E\u003C\u002Ftd\u003E\r\n      \u003C\u002Ftr\u003E\r\n    \u003C\u002Ftable\u003E\r\n\r\n  \u003C\u002Fform\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Please enter the missing word in the provided field. \u003Cbr\u003E\r\n  If you cannot recall the answer, please indicate \"IDK\".\r\n\u003C\u002Ffooter\u003E",
            "parameters": {},
            "files": {},
            "skip": "${ parameters.count \u003E 9 }"
          },
          {
            "type": "lab.html.Screen",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Blank screen",
            "content": "\u003Cheader\u003E\r\n  \u003Ch2\u003ELearning phase\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E \r\n  \u003Ctable class=\"table-plain w-m\" style=\"font-size: 2rem;\"\u003E\r\n\r\n  \u003C\u002Ftable\u003E  \r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Please memorize this pair of words.\r\n\u003C\u002Ffooter\u003E",
            "timeout": "500",
            "skip": "${ parameters.count \u003E 19 }"
          },
          {
            "type": "lab.html.Screen",
            "responses": {
              "keypress(Space)": "Continue"
            },
            "messageHandlers": {},
            "title": "Recall phase instructions",
            "content": "\u003Cheader\u003E \u003Ch2\u003E Recall phase \u003C\u002Fh2\u003E \u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv class=\"w-m text-justify\"\u003E\r\n    We'll now ask you to recall the words you have just seen in pairs. \u003Cbr\u003E\r\n    One word will be shown, and we'd ask you to fill in the second. \u003Cbr\u003E\r\n    If you cannot recall the answer, please indicate \"IDK\".\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Please press \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E to continue.\r\n\u003C\u002Ffooter\u003E",
            "parameters": {},
            "files": {},
            "skip": "${ parameters.count != 20 }"
          },
          {
            "type": "lab.html.Form",
            "responses": {},
            "messageHandlers": {},
            "title": "Recall screen",
            "content": "\u003Cheader\u003E\r\n  \u003Ch2\u003ERecall phase\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E \r\n  \u003Cform\u003E\r\n\r\n    \u003Ctable class=\"table-plain stimulus\"\u003E\r\n      \u003Ctr\u003E\r\n        \u003Ctd style=\"width: 50%\"\u003E\r\n          ${ parameters.cue }\r\n        \u003C\u002Ftd\u003E\r\n        \u003Ctd\u003E\r\n          &mdash;\r\n        \u003C\u002Ftd\u003E\r\n        \u003Ctd style=\"width: 50%\"\u003E\r\n          \u003Cinput type=\"text\" name=\"response\" autocomplete=\"off\" required class=\"w-100\"\u003E\r\n        \u003C\u002Ftd\u003E\r\n      \u003C\u002Ftr\u003E\r\n      \u003Cp\u003E\r\n        pheties drusier blerved drodged tossens trapely nithter achirin dradden tremish\r\n      \u003C\u002Fp\u003E\r\n      \u003Ctr\u003E\r\n        \u003Ctd\u003E\u003C\u002Ftd\u003E\r\n        \u003Ctd\u003E\r\n          \u003Cbutton type=\"submit\"\u003ESubmit\u003C\u002Fbutton\u003E\r\n        \u003C\u002Ftd\u003E\r\n        \u003Ctd\u003E\u003C\u002Ftd\u003E\r\n      \u003C\u002Ftr\u003E\r\n    \u003C\u002Ftable\u003E\r\n\r\n  \u003C\u002Fform\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Please enter the missing word in the provided field. \u003Cbr\u003E\r\n  If you cannot recall the answer, please indicate \"IDK\".\r\n\u003C\u002Ffooter\u003E",
            "parameters": {},
            "files": {},
            "skip": "${ parameters.count \u003C 20 }"
          },
          {
            "type": "lab.html.Screen",
            "responses": {
              "": ""
            },
            "messageHandlers": {},
            "title": "Wait screen",
            "content": "\u003Cheader\u003E\n  \u003Ch2\u003ERecall phase\u003C\u002Fh2\u003E\n\u003C\u002Fheader\u003E\n\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E \n  \u003Ctable class=\"table-plain w-m\" style=\"font-size: 2rem;\"\u003E\n\n  \u003C\u002Ftable\u003E \n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  Please wait...\n\u003C\u002Ffooter\u003E\n",
            "timeout": "500",
            "parameters": {},
            "files": {},
            "skip": "${ parameters.count \u003C 20 }"
          }
        ]
      }
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "cue": "gifted",
          "response": "chyrene"
        },
        {
          "cue": "pigeon",
          "response": "castopp"
        },
        {
          "cue": "delayed",
          "response": "bensked"
        },
        {
          "cue": "orphan",
          "response": "grature"
        },
        {
          "cue": "dive",
          "response": "slooper"
        },
        {
          "cue": "heroic",
          "response": "treeple"
        },
        {
          "cue": "sewer",
          "response": "slouder"
        },
        {
          "cue": "mole",
          "response": "lonbust"
        },
        {
          "cue": "madness",
          "response": "blosper"
        },
        {
          "cue": "click",
          "response": "addeded"
        }
      ],
      "responses": {
        "": ""
      },
      "messageHandlers": {},
      "title": "Experimental Loop 2",
      "sample": {
        "n": "30",
        "mode": "draw"
      },
      "parameters": {},
      "files": {},
      "indexParameter": "count",
      "shuffleGroups": [
        [
          "response"
        ]
      ],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Sequence",
        "content": [
          {
            "type": "lab.html.Screen",
            "responses": {
              "keypress(Space)": "Continue"
            },
            "messageHandlers": {},
            "title": "Learning phase instructions",
            "content": "\u003Cheader\u003E\r\n  \u003Ch2\u003EInstructions\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv class=\"w-m text-justify\"\u003E\r\n    \u003Cp\u003EHere is a 60s break before the next set of word pairs.\u003C\u002Fp\u003E\r\n    \u003Cp\u003EYou may skip ahead and continue before the 60s is up.\u003C\u002Fp\u003E\r\n    \u003Cp\u003EOnce you continue to the next page, word pairs will be presented to\r\n    you in succession.\u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Please press \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E to continue.\r\n\u003C\u002Ffooter\u003E",
            "parameters": {},
            "files": {},
            "timeout": "60000",
            "skip": "${ parameters.count \u003E 0 }"
          },
          {
            "type": "lab.html.Screen",
            "responses": {
              "": ""
            },
            "messageHandlers": {},
            "title": "Word pair presentation",
            "content": "\u003Cheader\u003E\r\n  \u003Ch2\u003ELearning phase\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E \r\n  \u003Ctable class=\"table-plain w-m\" style=\"font-size: 2rem;\"\u003E\r\n    \u003Ctr\u003E\r\n      \u003Ctd style=\"width: 200px\"\u003E${ parameters.cue }\u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E &mdash; \u003C\u002Ftd\u003E\r\n      \u003Ctd style=\"width: 200px\"\u003E${ parameters.response }\u003C\u002Ftd\u003E\r\n    \u003C\u002Ftr\u003E\r\n  \u003C\u002Ftable\u003E  \r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Please memorize this pair of words.\r\n\u003C\u002Ffooter\u003E",
            "timeout": "4000",
            "parameters": {},
            "files": {},
            "skip": "${ parameters.count \u003E 19 }"
          },
          {
            "type": "lab.html.Form",
            "responses": {},
            "messageHandlers": {},
            "title": "Recall screen",
            "content": "\u003Cheader\u003E\r\n  \u003Ch2\u003ERecall phase\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E \r\n  \u003Cform\u003E\r\n\r\n    \u003Ctable class=\"table-plain stimulus\"\u003E\r\n      \u003Ctr\u003E\r\n        \u003Ctd style=\"width: 50%\"\u003E\r\n          ${ parameters.cue }\r\n        \u003C\u002Ftd\u003E\r\n        \u003Ctd\u003E\r\n          &mdash;\r\n        \u003C\u002Ftd\u003E\r\n        \u003Ctd style=\"width: 50%\"\u003E\r\n          \u003Cinput type=\"text\" name=\"response\" autocomplete=\"off\" required class=\"w-100\"\u003E\r\n        \u003C\u002Ftd\u003E\r\n      \u003C\u002Ftr\u003E\r\n      \u003Ctr\u003E\r\n        \u003Ctd\u003E\u003C\u002Ftd\u003E\r\n        \u003Ctd\u003E\r\n          \u003Cbutton type=\"submit\"\u003ESubmit\u003C\u002Fbutton\u003E\r\n        \u003C\u002Ftd\u003E\r\n        \u003Ctd\u003E\u003C\u002Ftd\u003E\r\n      \u003C\u002Ftr\u003E\r\n    \u003C\u002Ftable\u003E\r\n\r\n  \u003C\u002Fform\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Please enter the missing word in the provided field. \u003Cbr\u003E\r\n  If you cannot recall the answer, please indicate \"IDK\".\r\n\u003C\u002Ffooter\u003E",
            "parameters": {},
            "files": {},
            "skip": "${ parameters.count \u003E 9 }"
          },
          {
            "type": "lab.html.Screen",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Blank screen",
            "content": "\u003Cheader\u003E\r\n  \u003Ch2\u003ELearning phase\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E \r\n  \u003Ctable class=\"table-plain w-m\" style=\"font-size: 2rem;\"\u003E\r\n\r\n  \u003C\u002Ftable\u003E  \r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Please memorize this pair of words.\r\n\u003C\u002Ffooter\u003E",
            "timeout": "500",
            "skip": "${ parameters.count \u003E 19 }"
          },
          {
            "type": "lab.html.Screen",
            "responses": {
              "keypress(Space)": "Continue"
            },
            "messageHandlers": {},
            "title": "Recall phase instructions",
            "content": "\u003Cheader\u003E \u003Ch2\u003E Recall phase \u003C\u002Fh2\u003E \u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv class=\"w-m text-justify\"\u003E\r\n    We'll now ask you to recall the words you have just seen in pairs. \u003Cbr\u003E\r\n    One word will be shown, and we'd ask you to fill in the second. \u003Cbr\u003E\r\n    If you cannot recall the answer, please indicate \"IDK\".\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Please press \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E to continue.\r\n\u003C\u002Ffooter\u003E",
            "parameters": {},
            "files": {},
            "skip": "${ parameters.count != 20 }"
          },
          {
            "type": "lab.html.Form",
            "responses": {},
            "messageHandlers": {},
            "title": "Recall screen",
            "content": "\u003Cheader\u003E\r\n  \u003Ch2\u003ERecall phase\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E \r\n  \u003Cform\u003E\r\n\r\n    \u003Ctable class=\"table-plain stimulus\"\u003E\r\n      \u003Ctr\u003E\r\n        \u003Ctd style=\"width: 50%\"\u003E\r\n          ${ parameters.cue }\r\n        \u003C\u002Ftd\u003E\r\n        \u003Ctd\u003E\r\n          &mdash;\r\n        \u003C\u002Ftd\u003E\r\n        \u003Ctd style=\"width: 50%\"\u003E\r\n          \u003Cinput type=\"text\" name=\"response\" autocomplete=\"off\" required class=\"w-100\"\u003E\r\n        \u003C\u002Ftd\u003E\r\n      \u003C\u002Ftr\u003E\r\n      \u003Cp\u003E\r\n        chyrene castopp bensked grature slooper treeple slouder lonbust blosper addeded\r\n      \u003C\u002Fp\u003E\r\n      \u003Ctr\u003E\r\n        \u003Ctd\u003E\u003C\u002Ftd\u003E\r\n        \u003Ctd\u003E\r\n          \u003Cbutton type=\"submit\"\u003ESubmit\u003C\u002Fbutton\u003E\r\n        \u003C\u002Ftd\u003E\r\n        \u003Ctd\u003E\u003C\u002Ftd\u003E\r\n      \u003C\u002Ftr\u003E\r\n    \u003C\u002Ftable\u003E\r\n\r\n  \u003C\u002Fform\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Please enter the missing word in the provided field. \u003Cbr\u003E\r\n  If you cannot recall the answer, please indicate \"IDK\".\r\n\u003C\u002Ffooter\u003E",
            "parameters": {},
            "files": {},
            "skip": "${ parameters.count \u003C 20 }"
          },
          {
            "type": "lab.html.Screen",
            "responses": {
              "": ""
            },
            "messageHandlers": {},
            "title": "Wait screen",
            "content": "\u003Cheader\u003E\n  \u003Ch2\u003ERecall phase\u003C\u002Fh2\u003E\n\u003C\u002Fheader\u003E\n\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E \n  \u003Ctable class=\"table-plain w-m\" style=\"font-size: 2rem;\"\u003E\n\n  \u003C\u002Ftable\u003E \n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  Please wait...\n\u003C\u002Ffooter\u003E\n",
            "timeout": "500",
            "parameters": {},
            "files": {},
            "skip": "${ parameters.count \u003C 20 }"
          }
        ]
      }
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "cue": "depend",
          "response": "pluared"
        },
        {
          "cue": "proposal",
          "response": "fastade"
        },
        {
          "cue": "vessel",
          "response": "drereby"
        },
        {
          "cue": "liberty",
          "response": "flanish"
        },
        {
          "cue": "surgical",
          "response": "reordom"
        },
        {
          "cue": "demand",
          "response": "blonged"
        },
        {
          "cue": "publicity",
          "response": "ottress"
        },
        {
          "cue": "banner",
          "response": "plished"
        },
        {
          "cue": "sacred",
          "response": "cridded"
        },
        {
          "cue": "compound",
          "response": "drandal"
        }
      ],
      "responses": {
        "": ""
      },
      "messageHandlers": {},
      "title": "Experimental Loop 3",
      "sample": {
        "n": "30",
        "mode": "draw"
      },
      "parameters": {},
      "files": {},
      "indexParameter": "count",
      "shuffleGroups": [
        [
          "response"
        ]
      ],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Sequence",
        "content": [
          {
            "type": "lab.html.Screen",
            "responses": {
              "keypress(Space)": "Continue"
            },
            "messageHandlers": {},
            "title": "Learning phase instructions",
            "content": "\u003Cheader\u003E\r\n  \u003Ch2\u003EInstructions\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv class=\"w-m text-justify\"\u003E\r\n    \u003Cp\u003EHere is a 60s break before the next set of word pairs.\u003C\u002Fp\u003E\r\n    \u003Cp\u003EYou may skip ahead and continue before the 60s is up.\u003C\u002Fp\u003E\r\n    \u003Cp\u003EOnce you continue to the next page, word pairs will be presented to\r\n    you in succession.\u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Please press \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E to continue.\r\n\u003C\u002Ffooter\u003E",
            "parameters": {},
            "files": {},
            "timeout": "60000",
            "skip": "${ parameters.count \u003E 0 }"
          },
          {
            "type": "lab.html.Screen",
            "responses": {
              "": ""
            },
            "messageHandlers": {},
            "title": "Word pair presentation",
            "content": "\u003Cheader\u003E\r\n  \u003Ch2\u003ELearning phase\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E \r\n  \u003Ctable class=\"table-plain w-m\" style=\"font-size: 2rem;\"\u003E\r\n    \u003Ctr\u003E\r\n      \u003Ctd style=\"width: 200px\"\u003E${ parameters.cue }\u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E &mdash; \u003C\u002Ftd\u003E\r\n      \u003Ctd style=\"width: 200px\"\u003E${ parameters.response }\u003C\u002Ftd\u003E\r\n    \u003C\u002Ftr\u003E\r\n  \u003C\u002Ftable\u003E  \r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Please memorize this pair of words.\r\n\u003C\u002Ffooter\u003E",
            "timeout": "4000",
            "parameters": {},
            "files": {},
            "skip": "${ parameters.count \u003E 19 }"
          },
          {
            "type": "lab.html.Form",
            "responses": {},
            "messageHandlers": {},
            "title": "Recall screen",
            "content": "\u003Cheader\u003E\r\n  \u003Ch2\u003ERecall phase\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E \r\n  \u003Cform\u003E\r\n\r\n    \u003Ctable class=\"table-plain stimulus\"\u003E\r\n      \u003Ctr\u003E\r\n        \u003Ctd style=\"width: 50%\"\u003E\r\n          ${ parameters.cue }\r\n        \u003C\u002Ftd\u003E\r\n        \u003Ctd\u003E\r\n          &mdash;\r\n        \u003C\u002Ftd\u003E\r\n        \u003Ctd style=\"width: 50%\"\u003E\r\n          \u003Cinput type=\"text\" name=\"response\" autocomplete=\"off\" required class=\"w-100\"\u003E\r\n        \u003C\u002Ftd\u003E\r\n      \u003C\u002Ftr\u003E\r\n      \u003Ctr\u003E\r\n        \u003Ctd\u003E\u003C\u002Ftd\u003E\r\n        \u003Ctd\u003E\r\n          \u003Cbutton type=\"submit\"\u003ESubmit\u003C\u002Fbutton\u003E\r\n        \u003C\u002Ftd\u003E\r\n        \u003Ctd\u003E\u003C\u002Ftd\u003E\r\n      \u003C\u002Ftr\u003E\r\n    \u003C\u002Ftable\u003E\r\n\r\n  \u003C\u002Fform\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Please enter the missing word in the provided field. \u003Cbr\u003E\r\n  If you cannot recall the answer, please indicate \"IDK\".\r\n\u003C\u002Ffooter\u003E",
            "parameters": {},
            "files": {},
            "skip": "${ parameters.count \u003E 9 }"
          },
          {
            "type": "lab.html.Screen",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Blank screen",
            "content": "\u003Cheader\u003E\r\n  \u003Ch2\u003ELearning phase\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E \r\n  \u003Ctable class=\"table-plain w-m\" style=\"font-size: 2rem;\"\u003E\r\n\r\n  \u003C\u002Ftable\u003E  \r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Please memorize this pair of words.\r\n\u003C\u002Ffooter\u003E",
            "timeout": "500",
            "skip": "${ parameters.count \u003E 19 }"
          },
          {
            "type": "lab.html.Screen",
            "responses": {
              "keypress(Space)": "Continue"
            },
            "messageHandlers": {},
            "title": "Recall phase instructions",
            "content": "\u003Cheader\u003E \u003Ch2\u003E Recall phase \u003C\u002Fh2\u003E \u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv class=\"w-m text-justify\"\u003E\r\n    We'll now ask you to recall the words you have just seen in pairs. \u003Cbr\u003E\r\n    One word will be shown, and we'd ask you to fill in the second. \u003Cbr\u003E\r\n    If you cannot recall the answer, please indicate \"IDK\".\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Please press \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E to continue.\r\n\u003C\u002Ffooter\u003E",
            "parameters": {},
            "files": {},
            "skip": "${ parameters.count != 20 }"
          },
          {
            "type": "lab.html.Form",
            "responses": {},
            "messageHandlers": {},
            "title": "Recall screen",
            "content": "\u003Cheader\u003E\r\n  \u003Ch2\u003ERecall phase\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E \r\n  \u003Cform\u003E\r\n\r\n    \u003Ctable class=\"table-plain stimulus\"\u003E\r\n      \u003Ctr\u003E\r\n        \u003Ctd style=\"width: 50%\"\u003E\r\n          ${ parameters.cue }\r\n        \u003C\u002Ftd\u003E\r\n        \u003Ctd\u003E\r\n          &mdash;\r\n        \u003C\u002Ftd\u003E\r\n        \u003Ctd style=\"width: 50%\"\u003E\r\n          \u003Cinput type=\"text\" name=\"response\" autocomplete=\"off\" required class=\"w-100\"\u003E\r\n        \u003C\u002Ftd\u003E\r\n      \u003C\u002Ftr\u003E\r\n      \u003Cp\u003E\r\n        pluared fastade drereby Flanish reordom blonged ottress plished cridded drandal\r\n      \u003C\u002Fp\u003E\r\n      \u003Ctr\u003E\r\n        \u003Ctd\u003E\u003C\u002Ftd\u003E\r\n        \u003Ctd\u003E\r\n          \u003Cbutton type=\"submit\"\u003ESubmit\u003C\u002Fbutton\u003E\r\n        \u003C\u002Ftd\u003E\r\n        \u003Ctd\u003E\u003C\u002Ftd\u003E\r\n      \u003C\u002Ftr\u003E\r\n    \u003C\u002Ftable\u003E\r\n\r\n  \u003C\u002Fform\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Please enter the missing word in the provided field. \u003Cbr\u003E\r\n  If you cannot recall the answer, please indicate \"IDK\".\r\n\u003C\u002Ffooter\u003E",
            "parameters": {},
            "files": {},
            "skip": "${ parameters.count \u003C 20 }"
          },
          {
            "type": "lab.html.Screen",
            "responses": {
              "": ""
            },
            "messageHandlers": {},
            "title": "Wait screen",
            "content": "\u003Cheader\u003E\n  \u003Ch2\u003ERecall phase\u003C\u002Fh2\u003E\n\u003C\u002Fheader\u003E\n\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E \n  \u003Ctable class=\"table-plain w-m\" style=\"font-size: 2rem;\"\u003E\n\n  \u003C\u002Ftable\u003E \n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  Please wait...\n\u003C\u002Ffooter\u003E\n",
            "timeout": "500",
            "parameters": {},
            "files": {},
            "skip": "${ parameters.count \u003C 20 }"
          }
        ]
      }
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "cue": "boost",
          "response": "brudied"
        },
        {
          "cue": "confined",
          "response": "thraped"
        },
        {
          "cue": "gallery",
          "response": "trunned"
        },
        {
          "cue": "cosmic",
          "response": "slarves"
        },
        {
          "cue": "breeding",
          "response": "stereas"
        },
        {
          "cue": "publish",
          "response": "detrabe"
        },
        {
          "cue": "editing",
          "response": "flatial"
        },
        {
          "cue": "laser",
          "response": "pruffed"
        },
        {
          "cue": "adjust",
          "response": "clitten"
        },
        {
          "cue": "donation",
          "response": "glorned"
        }
      ],
      "responses": {
        "": ""
      },
      "messageHandlers": {},
      "title": "Experimental Loop 4",
      "sample": {
        "n": "30",
        "mode": "draw"
      },
      "parameters": {},
      "files": {},
      "indexParameter": "count",
      "shuffleGroups": [
        [
          "response"
        ]
      ],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Sequence",
        "content": [
          {
            "type": "lab.html.Screen",
            "responses": {
              "keypress(Space)": "Continue"
            },
            "messageHandlers": {},
            "title": "Learning phase instructions",
            "content": "\u003Cheader\u003E\r\n  \u003Ch2\u003EInstructions\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv class=\"w-m text-justify\"\u003E\r\n    \u003Cp\u003EHere is a 60s break before the next set of word pairs.\u003C\u002Fp\u003E\r\n    \u003Cp\u003EYou may skip ahead and continue before the 60s is up.\u003C\u002Fp\u003E\r\n    \u003Cp\u003EOnce you continue to the next page, word pairs will be presented to\r\n    you in succession.\u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Please press \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E to continue.\r\n\u003C\u002Ffooter\u003E",
            "parameters": {},
            "files": {},
            "timeout": "60000",
            "skip": "${ parameters.count \u003E 0 }"
          },
          {
            "type": "lab.html.Screen",
            "responses": {
              "": ""
            },
            "messageHandlers": {},
            "title": "Word pair presentation",
            "content": "\u003Cheader\u003E\r\n  \u003Ch2\u003ELearning phase\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E \r\n  \u003Ctable class=\"table-plain w-m\" style=\"font-size: 2rem;\"\u003E\r\n    \u003Ctr\u003E\r\n      \u003Ctd style=\"width: 200px\"\u003E${ parameters.cue }\u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E &mdash; \u003C\u002Ftd\u003E\r\n      \u003Ctd style=\"width: 200px\"\u003E${ parameters.response }\u003C\u002Ftd\u003E\r\n    \u003C\u002Ftr\u003E\r\n  \u003C\u002Ftable\u003E  \r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Please memorize this pair of words.\r\n\u003C\u002Ffooter\u003E",
            "timeout": "4000",
            "parameters": {},
            "files": {},
            "skip": "${ parameters.count \u003E 19 }"
          },
          {
            "type": "lab.html.Form",
            "responses": {},
            "messageHandlers": {},
            "title": "Recall screen",
            "content": "\u003Cheader\u003E\r\n  \u003Ch2\u003ERecall phase\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E \r\n  \u003Cform\u003E\r\n\r\n    \u003Ctable class=\"table-plain stimulus\"\u003E\r\n      \u003Ctr\u003E\r\n        \u003Ctd style=\"width: 50%\"\u003E\r\n          ${ parameters.cue }\r\n        \u003C\u002Ftd\u003E\r\n        \u003Ctd\u003E\r\n          &mdash;\r\n        \u003C\u002Ftd\u003E\r\n        \u003Ctd style=\"width: 50%\"\u003E\r\n          \u003Cinput type=\"text\" name=\"response\" autocomplete=\"off\" required class=\"w-100\"\u003E\r\n        \u003C\u002Ftd\u003E\r\n      \u003C\u002Ftr\u003E\r\n      \u003Ctr\u003E\r\n        \u003Ctd\u003E\u003C\u002Ftd\u003E\r\n        \u003Ctd\u003E\r\n          \u003Cbutton type=\"submit\"\u003ESubmit\u003C\u002Fbutton\u003E\r\n        \u003C\u002Ftd\u003E\r\n        \u003Ctd\u003E\u003C\u002Ftd\u003E\r\n      \u003C\u002Ftr\u003E\r\n    \u003C\u002Ftable\u003E\r\n\r\n  \u003C\u002Fform\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Please enter the missing word in the provided field. \u003Cbr\u003E\r\n  If you cannot recall the answer, please indicate \"IDK\".\r\n\u003C\u002Ffooter\u003E",
            "parameters": {},
            "files": {},
            "skip": "${ parameters.count \u003E 9 }"
          },
          {
            "type": "lab.html.Screen",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Blank screen",
            "content": "\u003Cheader\u003E\r\n  \u003Ch2\u003ELearning phase\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E \r\n  \u003Ctable class=\"table-plain w-m\" style=\"font-size: 2rem;\"\u003E\r\n\r\n  \u003C\u002Ftable\u003E  \r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Please memorize this pair of words.\r\n\u003C\u002Ffooter\u003E",
            "timeout": "500",
            "skip": "${ parameters.count \u003E 19 }"
          },
          {
            "type": "lab.html.Screen",
            "responses": {
              "keypress(Space)": "Continue"
            },
            "messageHandlers": {},
            "title": "Recall phase instructions",
            "content": "\u003Cheader\u003E \u003Ch2\u003E Recall phase \u003C\u002Fh2\u003E \u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv class=\"w-m text-justify\"\u003E\r\n    We'll now ask you to recall the words you have just seen in pairs. \u003Cbr\u003E\r\n    One word will be shown, and we'd ask you to fill in the second. \u003Cbr\u003E\r\n    If you cannot recall the answer, please indicate \"IDK\".\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Please press \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E to continue.\r\n\u003C\u002Ffooter\u003E",
            "parameters": {},
            "files": {},
            "skip": "${ parameters.count != 20 }"
          },
          {
            "type": "lab.html.Form",
            "responses": {},
            "messageHandlers": {},
            "title": "Recall screen",
            "content": "\u003Cheader\u003E\r\n  \u003Ch2\u003ERecall phase\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E \r\n  \u003Cform\u003E\r\n\r\n    \u003Ctable class=\"table-plain stimulus\"\u003E\r\n      \u003Ctr\u003E\r\n        \u003Ctd style=\"width: 50%\"\u003E\r\n          ${ parameters.cue }\r\n        \u003C\u002Ftd\u003E\r\n        \u003Ctd\u003E\r\n          &mdash;\r\n        \u003C\u002Ftd\u003E\r\n        \u003Ctd style=\"width: 50%\"\u003E\r\n          \u003Cinput type=\"text\" name=\"response\" autocomplete=\"off\" required class=\"w-100\"\u003E\r\n        \u003C\u002Ftd\u003E\r\n      \u003C\u002Ftr\u003E\r\n      \u003Cp\u003E\r\n        brudied thraped trunned slarves stereas detrabe flatial pruffed clitten glorned\r\n      \u003C\u002Fp\u003E\r\n      \u003Ctr\u003E\r\n        \u003Ctd\u003E\u003C\u002Ftd\u003E\r\n        \u003Ctd\u003E\r\n          \u003Cbutton type=\"submit\"\u003ESubmit\u003C\u002Fbutton\u003E\r\n        \u003C\u002Ftd\u003E\r\n        \u003Ctd\u003E\u003C\u002Ftd\u003E\r\n      \u003C\u002Ftr\u003E\r\n    \u003C\u002Ftable\u003E\r\n\r\n  \u003C\u002Fform\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Please enter the missing word in the provided field. \u003Cbr\u003E\r\n  If you cannot recall the answer, please indicate \"IDK\".\r\n\u003C\u002Ffooter\u003E",
            "parameters": {},
            "files": {},
            "skip": "${ parameters.count \u003C 20 }"
          },
          {
            "type": "lab.html.Screen",
            "responses": {
              "": ""
            },
            "messageHandlers": {},
            "title": "Wait screen",
            "content": "\u003Cheader\u003E\n  \u003Ch2\u003ERecall phase\u003C\u002Fh2\u003E\n\u003C\u002Fheader\u003E\n\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E \n  \u003Ctable class=\"table-plain w-m\" style=\"font-size: 2rem;\"\u003E\n\n  \u003C\u002Ftable\u003E \n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  Please wait...\n\u003C\u002Ffooter\u003E\n",
            "timeout": "500",
            "parameters": {},
            "files": {},
            "skip": "${ parameters.count \u003C 20 }"
          }
        ]
      }
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Survey",
      "content": [
        {
          "type": "lab.html.Form",
          "content": "\u003Cheader\u003E \u003Ch2\u003E Participant Demographic Form \u003C\u002Fh2\u003E\u003C\u002Fheader\u003E\n\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv class=\"w-l text-left\" style=\"display: block\"\u003E\n    \n    \u003Ch2 class=\"text-center\"\u003EPlease tell us about yourself\u003C\u002Fh2\u003E\n    \u003Cp class=\"text-center\"\u003EBefore you end the study, we would like to learn a bit more about you. \u003C\u002Fp\u003E\n\n    \u003Cform id=\"demography\"\u003E\n      \u003Ctable\u003E\n        \u003C!-- Age --\u003E\n        \u003Ctr style=\"height: 50px\"\u003E\n          \u003Ctd class=\"font-weight-bold\"\u003E\n            How old are you, in years?\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cinput name=\"age\" type=\"number\" required class=\"w-100\"\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n        \n        \u003C!-- Gender --\u003E\n        \u003Ctr style=\"height: 100px\"\u003E\n          \u003Ctd class=\"font-weight-bold\"\u003E\n            What is your gender?\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cselect name=\"Gender\" required class=\"w-100\"\u003E\n              \u003Coption value=\"\" selected\u003E\n                -- Please click to select --\n              \u003C\u002Foption\u003E\n              \u003Coption value=\"female\"\u003EFemale\u003C\u002Foption\u003E\n              \u003Coption value=\"male\"\u003EMale\u003C\u002Foption\u003E\n              \u003Coption value=\"non-binary\"\u003ENon-Binary\u003C\u002Foption\u003E\n              \u003Coption value=\"prefer not\"\u003EI prefer not to answer.\u003C\u002Foption\u003E\n            \u003C\u002Fselect\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n        \n        \u003C!-- Ethnicity--\u003E\n          \u003Ctr style=\"height: 100px\"\u003E\n            \u003Ctd\u003E\n              What is your race\u002Fethnicity?\n            \u003C\u002Ftd\u003E\n            \u003Ctd\u003E\n              \u003Cselect style=\"width: 200px\" name=\"Ethnicity\"\u003E\n                \u003Coption value=\"\" selected\u003E\n                  -- Please click to select --\n                \u003C\u002Foption\u003E\n                \u003Coption value=\"Chinese\"\u003EChinese\u003C\u002Foption\u003E\n                \u003Coption value=\"Indian\"\u003EIndian\u003C\u002Foption\u003E\n                \u003Coption value=\"Malay\"\u003EMalay\u003C\u002Foption\u003E\n                \u003Coption value=\"Others\"\u003EOthers\u003C\u002Foption\u003E\n                \u003Coption value=\"prefer not\"\u003EI prefer not to answer.\u003C\u002Foption\u003E\n              \u003C\u002Fselect\u003E\n            \u003C\u002Ftd\u003E\n          \u003C\u002Ftr\u003E\n    \n\n        \u003C!-- Education --\u003E\n        \u003Ctr style=\"height: 100px\"\u003E\n          \u003Ctd\u003E\n            Please specify your highest attained education level:\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cselect name=\"education\" class=\"w-100\"\u003E\n              \u003Coption value=\"\" selected\u003E\n                -- Please click to select --\n              \u003C\u002Foption\u003E\n              \u003Coption value=\"no\"\u003Eno degree\u003C\u002Foption\u003E\n              \u003Coption value=\"jc\"\u003E'A' levels or equivalent\u003C\u002Foption\u003E\n              \u003Coption value=\"poly\"\u003EPolytechnic diploma\u003C\u002Foption\u003E\n              \u003Coption value=\"bachelor\"\u003EBachelor's\u003C\u002Foption\u003E\n              \u003Coption value=\"master\"\u003EMaster's\u003C\u002Foption\u003E\n              \u003Coption value=\"phd\"\u003EPhD\u003C\u002Foption\u003E\n              \u003Coption value=\"prefer not\"\u003EI prefer not to answer.\u003C\u002Foption\u003E\n            \u003C\u002Fselect\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n\n        \u003C!-- languages --\u003E\n        \u003Ctr style=\"height: 50px\"\u003E\n          \u003Ctd class=\"font-weight-bold\"\u003E\n            How many languages can you speak?\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cinput name=\"languages\" type=\"number\" required class=\"w-100\"\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n\n        \u003C!-- Language --\u003E\n        \u003Ctr style=\"height: 100px\"\u003E\n          \u003Ctd\u003E\n            What languages, other than English, can you speak? If none, please indicate \"NA\".\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cinput name=\"Language\" required class=\"w-100\"\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n\n        \u003C!-- first language --\u003E\n        \u003Ctr style=\"height: 100px\"\u003E\n          \u003Ctd class=\"font-weight-bold\"\u003E\n            Is English your first language?\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cselect name=\"first language\" required class=\"w-100\"\u003E\n              \u003Coption value=\"\" selected\u003E\n                -- Please click to select --\n              \u003C\u002Foption\u003E\n              \u003Coption value=\"yes\"\u003EYes\u003C\u002Foption\u003E\n              \u003Coption value=\"no\"\u003ENo\u003C\u002Foption\u003E\n            \u003C\u002Fselect\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E        \n\n        \u003C!-- Disorders --\u003E\n        \u003Ctr style=\"height: 100px\"\u003E\n          \u003Ctd class=\"font-weight-bold\"\u003E\n            Do you have any language-related impairments\u002Fdisorders?\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cselect name=\"Disorders\" required class=\"w-100\"\u003E\n              \u003Coption value=\"\" selected\u003E\n                -- Please click to select --\n              \u003C\u002Foption\u003E\n              \u003Coption value=\"yes\"\u003EYes\u003C\u002Foption\u003E\n              \u003Coption value=\"no\"\u003ENo\u003C\u002Foption\u003E\n              \u003Coption value=\"prefer not\"\u003EI prefer not to answer.\u003C\u002Foption\u003E\n            \u003C\u002Fselect\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n        \n        \u003C!-- Column balance --\u003E\n        \u003Ccolgroup\u003E\n          \u003Ccol style=\"width: 45%\"\u003E\n          \u003Ccol style=\"width: 65%\"\u003E\n        \u003C\u002Fcolgroup\u003E\n      \u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"content-vertical-center content-horizontal-right\"\u003E\n  \u003Cbutton type=\"submit\" form=\"demography\"\u003EContinue &rarr;\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E",
          "parameters": {},
          "responses": {
            "": ""
          },
          "messageHandlers": {},
          "title": "Demography form",
          "files": {}
        },
        {
          "type": "lab.html.Form",
          "content": "\u003Cheader\u003E \u003Ch2\u003E Participant Demographic Form \u003C\u002Fh2\u003E\u003C\u002Fheader\u003E\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv class=\"w-l text-left\" style=\"display: block\"\u003E\n    \n    \u003Ch2 class=\"text-center\"\u003EPlease answer these truthfully.\u003C\u002Fh2\u003E\n    \u003Cp class=\"text-center\"\u003EThe following questions are important for determining the accuracy and reliability of the data collected from this study. Please answer truthfully. You will still receive full credit\u002Freimbursement for your participation, regardless of your responses here. \u003C\u002Fp\u003E\n\n    \u003Cform id=\"checks\"\u003E\n      \u003Ctable\u003E\n        \n        \n        \u003C!-- Device --\u003E\n          \u003Ctr style=\"height: 100px\"\u003E\n            \u003Ctd\u003E\n              What type of device did you complete this study on?\n            \u003C\u002Ftd\u003E\n            \u003Ctd\u003E\n              \u003Cselect style=\"width: 200px\" name=\"Device\"\u003E\n                \u003Coption value=\"\" selected\u003E\n                  -- Please click to select --\n                \u003C\u002Foption\u003E\n                \u003Coption value=\"computer\"\u003ELaptop\u002FPC\u003C\u002Foption\u003E\n                \u003Coption value=\"phone\"\u003EMobile Phone\u003C\u002Foption\u003E\n                \u003Coption value=\"Others\"\u003EOthers\u003C\u002Foption\u003E\n                \u003Coption value=\"prefer not\"\u003EI prefer not to answer.\u003C\u002Foption\u003E\n              \u003C\u002Fselect\u003E\n            \u003C\u002Ftd\u003E\n          \u003C\u002Ftr\u003E\n    \n\n        \u003C!-- Distraction --\u003E\n        \u003Ctr style=\"height: 100px\"\u003E\n          \u003Ctd\u003E\n            Were you distracted at any point during the study?\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cselect name=\"Distraction\" class=\"w-100\"\u003E\n              \u003Coption value=\"\" selected\u003E\n                -- Please click to select --\n              \u003C\u002Foption\u003E\n              \u003Coption value=\"no\"\u003ENo\u003C\u002Foption\u003E\n              \u003Coption value=\"not significant\"\u003EYes, but the distractions did not affect my ability to focus and respond.\u003C\u002Foption\u003E\n              \u003Coption value=\"yes\"\u003EYes, I was distracted and it affected my responses.\u003C\u002Foption\u003E\n              \u003Coption value=\"prefer not\"\u003EI prefer not to answer.\u003C\u002Foption\u003E\n            \u003C\u002Fselect\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n\n        \u003C!-- Honesty --\u003E\n        \u003Ctr style=\"height: 100px\"\u003E\n          \u003Ctd class=\"font-weight-bold\"\u003E\n            Did you employ external help during the study (e.g. taking photo\u002Fvideo recording of word pairs for reference, etc.) ?\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cselect name=\"Honesty\" required class=\"w-100\"\u003E\n              \u003Coption value=\"\" selected\u003E\n                -- Please click to select --\n              \u003C\u002Foption\u003E\n              \u003Coption value=\"yes\"\u003EYes\u003C\u002Foption\u003E\n              \u003Coption value=\"no\"\u003ENo\u003C\u002Foption\u003E\n              \u003Coption value=\"prefer not\"\u003EI prefer not to answer.\u003C\u002Foption\u003E\n            \u003C\u002Fselect\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E        \n\n        \u003C!-- Column balance --\u003E\n        \u003Ccolgroup\u003E\n          \u003Ccol style=\"width: 45%\"\u003E\n          \u003Ccol style=\"width: 65%\"\u003E\n        \u003C\u002Fcolgroup\u003E\n      \u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"content-vertical-center content-horizontal-right\"\u003E\n  \u003Cbutton type=\"submit\" form=\"checks\"\u003EContinue &rarr;\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E",
          "parameters": {},
          "responses": {
            "": ""
          },
          "messageHandlers": {},
          "title": "Checks form",
          "files": {}
        }
      ]
    },
    {
      "type": "lab.html.Screen",
      "responses": {
        "undefined": ""
      },
      "messageHandlers": {},
      "title": "Debrief",
      "content": "\u003Cheader\u003E \u003Ch2\u003E Thank you for volunteering your time to complete our study! \u003C\u002Fh2\u003E \u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\" align=\"left\"\u003E\r\n  \u003Cp style=\"text-align:left;\"\u003E\r\n    As mentioned before, this research study attempts to create a better understanding of how semantic networks are formed and, by extension, how learning of words and word associations occur. Shedding light on such semantic networks will enable better comprehension of the brain and cognitive processes. \u003Cbr\u003E\r\n    \u003Cbr\u003E\r\n    If you wish to withdraw your participation from this experiment, kindly contact the principal investigator as listed below within the next 48 hours. You will still receive full credit and reimbursement for your participation. Please do so within the next 48 hours as any identifying information will be discarded after that and it would no longer be possible to locate and remove your data. The principal investigator’s contact is as follows: \u003Cbr\u003E\r\n    \u003Cbr\u003E\r\n      Name: Jazton Chern Jie Sern \u003Cbr\u003E\r\n      Contact No.: (+65) 83226303 \u003Cbr\u003E\r\n      Email: jazton@nus.edu.sg\u003Cbr\u003E\r\n      \u003Cbr\u003E\r\n    This is an ongoing study that is expected to be completed in May 2022. If you find interest in the research and would like to be updated about the progress and subsequent findings, you are invited to communicate with the principal investigator for more details and updates. \u003Cbr\u003E\r\n    \u003Cbr\u003E\r\n    Once again, thank you for your time and participation in this study. \u003Cbr\u003E\r\n  \u003C\u002Fp\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  \u003Cb\u003EPlease do not close this window.\u003C\u002Fb\u003E\u003Cbr\u003E This window will close automatically in 30s and you will be redirected to receive your participation credit then. \u003Cbr\u003E\r\n  Do contact the principal investigator if your participation credit is not awarded to you.\r\n\u003C\u002Ffooter\u003E",
      "timeout": "30000",
      "parameters": {},
      "files": {}
    }
  ]
})

// Let's go!
jatos.onLoad(() => study.run())