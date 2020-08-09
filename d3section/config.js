const config = {

    encoding: "UTF-8",

    max_number: 50,


    showMessage: true,


    // Auto Sort by Time
    // standard datetime format (YYYY-MM-DD HH:MM) needed!!! 
    auto_sort: false,

    // 
    timeFormat: "%Y",


    reverse: false,

    // 
    divide_by: "type",


    divide_color_by: "type",


    color: {
        'Lois Weber': '#1177CC',
        'Dorothy Arzner': '#1E3B10',
        'Chloe Zhao': '#5e075f',
        'Julie Dash': '#a42323',
        'Chantal Akerman': '#C9416E',
        'Sofia Coppola': '#b32d00',
        'Kathryn Bigelow': '#3a6b40',
        'Lotte Reiniger': '#723C96',
        'Lynne Ramsay': '#c84a37',
        'Amy Heckerling': '#667788',
        'Lina Wertmu╠êller': '#2a7a1f',
        'Debra Granik': '#481089',
        'Barbra Streisand': '#549281',
        'Agnes Varda': '#5f438c',
        'Lilly Wachowski': '#3b64de',
        'Lana Wachowski': '#066055',
        'Penny Marshall': '#691660',
        'Barbara Kopple': '#930610',
        'Greta Gerwig': '#050c61',
        'Barbara Loden': '#D6AE61',
        'Vera Chytilova': '#617479',
        'Marjane Satrapi': '#b49518',
        'Jane Campion': '#04787c',
        'Maya Deren': '#db5816',
        'Andrea Arnold': '#98a40e',
        'Tamara Jenkins': '#453ddb',
        'Gina Prince-Bythewood': '#95D16E',
        'Lisa Cholodenko': '#03b0aa',
        'Gillian Armstrong': '#b598e6',
        'Marielle Heller': '#1d8a0f',
        'Donna Deitch': '#9e2e80',
        'Euzhan Palcy': '#B3D1DC',
        'Su Friendrich': '#7942B4',
        'Cheryl Dunye': '#751287',
        'Kasi Lemmons': '#4E3026',
        'Jennie Livingston': '#10894d',
        'Susan Seidelman': '#580976',
        'Jennifer Kent': '#A34324',
        'Sarah Polley': '#371A5B',
        'Patty Jenkins': '#7F1520',
        'Forugh Farrokhzad': '#0e34be',
        'Ava DuVernay': '#4E7CC2',
        'C├⌐line Sciamma': '#7E9BA1',
        'Elaine May': '#34A389',
        'Penelope Spheeris': '#80c86a',
        'Kathleen Collins (II)': '#399a18',
        'Trinh T. Minh-ha': '#35b154',
        'Catherine Breillat': '#067DB2',
        'Patricia Cardoso': '#a3cc66',
        'Niki Caro': '#179e15',
        'Karyn Kusama': '#5DA3D3',
        'Dee Rees': '#228898',
        'M├⌐lanie Laurent': '#04624a',
        'Lucrecia Martel': '#02974d',
        'Mabel Normand': '#E0BDBA',
        'Kelly Reichardt': '#DA3119',
        'Gurinder Chadha': '#813737',
        'Kirsten Johnson': '#750a47',
        'Sally Potter': '#0a5c5b',
        'Jennifer Lee': '#c75305',
        'Joan Micklin Silver': '#f27573',
        'Shirley Clarke': '#931f84',
        'Catherine Hardwick': '#C61D4D',
        'Nancy Meyers': '#d17315',
        'Kimberly Peirce': '#750da5',
        ' Martha Coolidge': '#939537',
        'Rungano Nyoni': '#0aa95',
        'Susanne Bier': '#2D3875',
        'Ida Lupino': '#8a203c',
        'Allison Anders': '#63116e',
        'Desiree Akhavan': '#0E4256',
        'Nora Twomey': '#3399ff',
        'Marleen Gorris': '#b33c00',
        'Alanis Obomsawin': '#4f9108',
        'Nicole Holofcener': '#08aaa0',
        'Joanna Hogg': '#220b75',
        'Claudia Weill': '#4C22C1'
    },


    changeable_color: false,


    // divide_changeable_color_by_type: false,
    // color_range: ["#ff7e5f", "#feb47b"],


    // left label
    itemLabel: "Movie:",

    // right label
    typeLabel: "Director:",


    // Top item information horizontal location
    item_x: 110,


    interval_time: 1,

    // upper words hight 
    text_y: -50,

    offset:130,

    // right word position 
    text_x: 620,

    offset: 140,


    // Hide barInfo if bar is shorter than barInfo
    display_barInfo: 150,

    //counting the top one? 

    use_counter: false,

    step: 1,
    //////////////////////////////////////////////////////////////////////////////
    // '.2f' means keeping two decimals.
    format: ",.0f",

    // in the end we have 
    postfix: "",

    deformat: function (val, postfix) {
        return Number(val.replace(postfix, "").replace(/\,/g, ""));
    },
    //////////////////////////////////////////////////////////////////////////////

    left_margin: 250,
    right_margin: 20,
    top_margin: 80,
    bottom_margin: 0,


    dateLabel_switch: true,
    // default position x:null,y:null
    dateLabel_x: null,
    dateLabel_y: null,


    allow_up: false,


    always_up: false,


    enter_from_0: true,

    // if all the number is too big, then ajust this to（min）*2-（max）
    big_value: true,


    use_semilogarithmic_coordinate: false,

    // barinfo too long then adjust this one 
    long: false,

    // what how many time point? 
    wait: 0,

    // the rate of changing the animate 
    update_rate: 10,


    // animation:'linear',
    showLabel: true,


    labelx: -10,

    use_img: false,


    imgs: {
        'Lois Weber': 
            "https://en.wikipedia.org/wiki/Lois_Weber#/media/File:LoisWeber.jpg",
        name2:
            "http://",
        name: "path/to/img"
    },


  background_color: "white",


  rounded_rectangle: false,

  // show x axis? 
  show_x_tick: true,

  // limit bar info display length
  bar_name_max: 30
};
