/* ============================================================
   DC17 Temperature — SHARED CONFIG
   Edit sensors here ONLY. Both index.html (desktop) and
   level4-mobile.html (mobile) read from this one file.

   To bring a room live: paste its LI-COR sensor serial into
   that room's  sn: ""  below, save, and commit config.js.
   Leave sn empty to keep a room as an unassigned placeholder.
   ============================================================ */
window.APP = {
  PROXY_URL: "https://licor-proxy.devinmorell.workers.dev/",
  REFRESH_MS: 120000,
  LOOKBACK_MIN: 1440,
  FLOORS: [
  { id:"L4", name:"Level 4", image:"floor4.png", w:1901, h:3406, stationSn:"22459340", nodes:[
    { id:"4033",  name:"Elec Room S",     loc:"Electrical Room S",       top: 17.5, left: 73.8, sn:"22577742",  measurement:"Temperature", warnF:85, alarmF:95 },
    { id:"4032",  name:"Elec Room T",     loc:"Electrical Room T",       top: 26.8, left: 73.9, sn:"22577741",  measurement:"Temperature", warnF:85, alarmF:95 },
    { id:"4031",  name:"Elec Room U",     loc:"Electrical Room U",       top: 36.1, left: 73.9, sn:"22577740",  measurement:"Temperature", warnF:85, alarmF:95 },
    { id:"4029",  name:"Elec Room V",     loc:"Electrical Room V",       top: 45.3, left: 73.9, sn:"22577739",  measurement:"Temperature", warnF:85, alarmF:95 },
    { id:"4028",  name:"Elec Room W",     loc:"Electrical Room W",       top: 54.5, left: 74.0, sn:"22443485",  measurement:"Temperature", warnF:85, alarmF:95 },
    { id:"4027",  name:"Elec Room X",     loc:"Electrical Room X",       top: 63.6, left: 74.0, sn:"22443487",  measurement:"Temperature", warnF:85, alarmF:95 },
    { id:"4026",  name:"Elec Room R1",    loc:"Electrical Room R1",      top: 72.7, left: 73.9, sn:"22443486",  measurement:"Temperature", warnF:85, alarmF:95 },
    { id:"EH-3",  name:"Ehouse 3",        loc:"Ehouse 3",                top: 27.1, left: 94.3, sn:"",          measurement:"Temperature", warnF:80, alarmF:90 },
    { id:"EH-2",  name:"Ehouse 2",        loc:"Ehouse 2",                top: 36.3, left: 94.1, sn:"",          measurement:"Temperature", warnF:80, alarmF:90 },
    { id:"EH-1",  name:"Ehouse 1",        loc:"Ehouse 1",                top: 46.3, left: 94.2, sn:"",          measurement:"Temperature", warnF:80, alarmF:90 },
    { id:"4030",  name:"Data Hall 4-F",   loc:"Data Hall · Aisle 4-F",   top: 33.8, left: 33.1, sn:"22577743",  measurement:"Temperature", warnF:80, alarmF:97 },
    { id:"4020",  name:"Data Hall 4-C",   loc:"Data Hall · Aisle 4-C",   top: 61.0, left: 11.5, sn:"22577738",  measurement:"Temperature", warnF:80, alarmF:97 },
  ]},
  { id:"L3", name:"Level 3", image:"floor3.png", w:1901, h:3406, stationSn:"22459340", nodes:[
    { id:"3033",  name:"Elec Room Q",     loc:"Electrical Room Q",       top: 17.5, left: 73.8, sn:"22577936",  measurement:"Temperature", warnF:85, alarmF:95 },
    { id:"3032",  name:"Elec Room R2",    loc:"Electrical Room R2",      top: 26.8, left: 73.9, sn:"22577744",  measurement:"Temperature", warnF:85, alarmF:95 },
    { id:"3031",  name:"Elec Room P",     loc:"Electrical Room P",       top: 36.1, left: 73.9, sn:"22577935",  measurement:"Temperature", warnF:85, alarmF:95 },
    { id:"3029",  name:"Elec Room N",     loc:"Electrical Room N",       top: 45.3, left: 73.9, sn:"22577934",  measurement:"Temperature", warnF:85, alarmF:95 },
    { id:"3028",  name:"Elec Room M",     loc:"Electrical Room M",       top: 54.5, left: 74.0, sn:"22577933",  measurement:"Temperature", warnF:85, alarmF:95 },
    { id:"3027",  name:"Elec Room L",     loc:"Electrical Room L",       top: 63.6, left: 74.0, sn:"22577929",  measurement:"Temperature", warnF:85, alarmF:95 },
    { id:"3026",  name:"Elec Room K",     loc:"Electrical Room K",       top: 72.7, left: 73.9, sn:"22577928",  measurement:"Temperature", warnF:85, alarmF:95 },
    { id:"3030",  name:"Data Hall 3-F",   loc:"Data Hall · Aisle 3-F",   top: 33.8, left: 33.1, sn:"",          measurement:"Temperature", warnF:80, alarmF:97 },
    { id:"3020",  name:"Data Hall 3-C",   loc:"Data Hall · Aisle 3-C",   top: 61.0, left: 11.5, sn:"",          measurement:"Temperature", warnF:80, alarmF:97 },
  ]},
  ]
};