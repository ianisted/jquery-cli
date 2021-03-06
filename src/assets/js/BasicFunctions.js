/*
* Basic Functions, by Gavin Barnett
* This file was initially taken from AberQuest project of Ian Isted.
* And then modified a bitty.
*/

var BasicFunctions = {
/*These are the built-in CLI function
  Please keep in alphabetical order for my OCD :-D
*/
  about:function(stdin){
    /*Send about information to stdout"<strong>print</strong>: Print a string to the log.";
    */

    //required variable
    var stdout = "";
    var function_menu = "";
    stdin = stdin.toLowerCase();
    //function variables

    //function_menu structure
    function_menu = {
      'default': function(stdin) { //required option
        //default option
        stdout = "ERROR: This is not a valid command. Please see 'About Help'"
      },
      'help': function(stdin) { //required option
        //big help statement
        stdout = '<br />HELP: ABOUT []<br />' + '<br  />  ABOUT : Displays basic about information<br />  ABOUT [LICENCE] : Displays licence specifc information<br />';
      },
      /* function specific options */
      'licence': function(stdin) {
        //display licence information
        stdout = '<em>The MIT License (MIT)<br /><br />Copyright (c) 2016 Ian Isted<br />Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: <br />The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</em>';
      },
      '': function(stdin) {
        //display general about information
        stdout = '<em>CLI version 1.0.<br />Built by <a href="http://twitter.com/ianisted" target="_blank">@ianisted</a>.<br />Released under <a href="https://github.com/ianisted/jquery-cli/blob/master/LICENSE" target="_blank">MIT license</a>. Type <strong>about license</strong> to see the license.</strong></em>';
      }
    };

    //Additional 'hidden menu' options
    switch (stdin){
      case 'function_menu': //required option
        //sends internal function_menu out of stdout - used for tabcomplete
        stdout = function_menu;
        return (stdout);
        break;
      case 'helpdir': //required option
        //oneliner help statement
        stdout = "<strong>about</strong>: Display information about this program.";
        return (stdout);
        break;
      default:
        //default is to look up function_menu
        (function_menu[stdin]|| function_menu['default'])(stdin);
        break;
    }

    //normally required echo of stdout
    BasicFunctions.echo(stdout);

    //required return of stdout
    return (stdout);
  },
  cls:function(stdin){
    /*Clears terminal window
    to be expanded with stdin dictating what to clear
    */

    //required variable
    var stdout = "";
    var function_menu = "";
    stdin = stdin.toLowerCase();
    //function variables

    //function_menu structure
    function_menu = {
      'default': function(stdin) { //required option
        //default option
        stdout = "ERROR: This is not a valid command. Please see 'Clear Help'";
      },
      'help': function(stdin) { //required option
        //big help statement
        stdout = '<br />HELP: CLEAR<br />' + '<br  />  CLEAR : Clears the current log view.<br />';
      },
      '': function(stdin) {
        //clears terminal window
        $('#terminal ul').html('');
        stdout = 'Application version: ' + version;
      }
    };

    //Additional 'hidden menu' options
    switch (stdin){
      case 'function_menu': //required option
        //sends internal function_menu out of stdout - used for tabcomplete
        stdout = function_menu;
        return (stdout);
        break;
      case 'helpdir': //required option
        //oneliner help statement
        stdout = "<strong>clear</strong>: Clears the current log view.";
        return (stdout);
        break;
      default:
        //default is to look up function_menu
        (function_menu[stdin]|| function_menu['default'])(stdin);
        break;
    }

    //normally required echo of stdout
    BasicFunctions.echo(stdout);

    //required return of stdout
    return (stdout);
  },
  connect:function(stdin){
    /*Attempts to connect to server
      [NOT YET IMPLEMENTED]
    */

    //required variable
    var stdout = "";
    var function_menu = "";
    stdin = stdin.toLowerCase();
    //function variables

    //function_menu structure
    function_menu = {
      'default': function(stdin) { //required option
        //default option
        switch (stdin){
          case 'demo':
            //load game
            BasicFunctions.echo ('Connecting ...');
            DemoFunctions.init_menu('function_menu');
            stdout = 'Connected!';
            break;
          case 'game1':
            //load game
            BasicFunctions.echo ('Connecting ...');
            Game1.init_menu('function_menu');
            stdout = 'Connected!';
            break;
          default:
            stdout = 'Could not connect to: ' + stdin + '.<br /> Application has not been setup to connect to a server.';
            break;
        }
      },
      'help': function(stdin) { //required option
        //big help statement
        stdout = '<br />HELP: CONNECT<br />' + '<br  />  CONNECT : Function not implemented. No help avaliable.<br />';
      },
      '': function(stdin) {
        //prompt for server address
        stdout = 'Please give a server address <br /> e.g: Connect Demo';
      }
    };

    //Additional 'hidden menu' options
    switch (stdin){
      case 'function_menu': //required option
        //sends internal function_menu out of stdout - used for tabcomplete
        stdout = function_menu;
        return (stdout);
        break;
      case 'helpdir': //required option
        //oneliner help statement
        stdout = "<strong>connect</strong>: Attempt to connect to a server.";
        return (stdout);
        break;
      default:
        //default is to look up function_menu
        (function_menu[stdin]|| function_menu['default'])(stdin);
        break;
    }

    //normally required echo of stdout
    BasicFunctions.echo(stdout);

    //required return of stdout
    return (stdout);
    //!!!!!!!!!!!!!!!!!!!!!!!!!11
    switch (stdin){
      case "helpdir":
        stdout = "<strong>connect</strong>: Attempt to connect to a server.";
        return stdout;
        break;
      case "help":
        stdout = '<br />HELP: CONNECT<br />' + '<br  />  CONNECT : Function not implemented. No help avaliable.<br />';
        break;
      default:
        var stdout = 'Could not connect. Application has not been setup to connect to a server.';
        break;
      }
    BasicFunctions.echo(stdout);
    return stdout;
  },
  echo:function(stdin){
    /*Echo's stdin to stdout
    Echo can be turned ON/OFF with Echo On & Echo Off
    If Echo is On then will also Echo Command to Terminal.
    */

    //required variable
    var stdout = "";
    var function_menu = "";
    //stdin = stdin.toLowerCase();
    //function variables

    //function_menu structure
    function_menu = {
      'default': function(stdin) { //required option
        //default option
        stdout = stdin;
      },
      'help': function(stdin) { //required option
        //big help statement
        stdout = '<br />HELP: ECHO []<br />' + '<br  />  ECHO [stdin] : Echo stdin to stdout and prints to terminal<br />  ECHO [ON/OFF] : Allows echo to print to terminal. std still goes to stdout<br />  ECHO : Displays current Echo state (ECHO ON/OFF)<br /> ';
      },
      /* function specific options */
      'off': function(stdin) {
        //Turn Echo Off
        stdout = "ECHO OFF";
        echosetting = false;
      },
      'on': function(stdin) {
        //Turn Echo On
        stdout = "ECHO ON";
        echosetting = true;
      },
      '': function(stdin) {
        //Show Echo Setting
        if (echosetting == false) {
          stdout = "ECHO OFF";
        }else {
          stdout = "ECHO ON";
        }
      }
    };

    //Additional 'hidden menu' options
    switch (stdin){
      case 'function_menu': //required option
        //sends internal function_menu out of stdout - used for tabcomplete
        stdout = function_menu;
        return (stdout);
        break;
      case 'helpdir': //required option
        //oneliner help statement
        stdout = "<strong>echo</strong>: Echo a string to the terminal.";
        return (stdout);
        break;
      default:
        //default is to look up function_menu
        (function_menu[stdin.toLowerCase()]|| function_menu['default'])(stdin);
        break;
    }

    //normally required echo of stdout
    if (echosetting == true) {
      logger(stdout);
    }

    //required return of stdout
    return (stdout);
  },
  hacker:function(stdin){
    /*Easter Egg
    Enables/Disabled Hackermode
    Hacker mode changes colour scheme
    */

    //required variable
    var stdout = "";
    var function_menu = "";
    stdin = stdin.toLowerCase();
    //function variables

    //function_menu structure
    function_menu = {
      'default': function(stdin) { //required option
        //default option
        stdout = "ERROR: This is not a valid command. Please see 'Clear Help'";
      },
      'help': function(stdin) { //required option
        //big help statement
        stdout = '<br />HELP: HACKER<br />' + '<br  />  HACKER : Enables hacker mode<br />';
      },
      '': function(stdin) {
        //toggles hacker mode
        $('html').toggleClass('hacker');
        stdout = "hackermode toggled";
      }
    };

    //Additional 'hidden menu' options
    switch (stdin){
      case 'function_menu': //required option
        //sends internal function_menu out of stdout - used for tabcomplete
        stdout = function_menu;
        return (stdout);
        break;
      case 'helpdir': //required option
        //oneliner help statement
        stdout = "<strong>hacker</strong>: Enables hacker mode.";
        return (stdout);
        break;
      default:
        //default is to look up function_menu
        (function_menu[stdin]|| function_menu['default'])(stdin);
        break;
    }

    //normally required echo of stdout
    BasicFunctions.echo(stdout);

    //required return of stdout
    return (stdout);
  },
  help:function(stdin){
    /*help lists all avaliable commands
    help [command] gives specifics about a command
    */

    //required variable
    var stdout = "";
    var function_menu = "";
    stdin = stdin.toLowerCase();
    //function variables

    //function_menu structure
    function_menu = {
      'default': function(stdin) { //required option
        //give specific help on [stdin]
        //uses help function instead each CLI_menu function
        echosetting = false;
        stdout = (CLI_Menu[stdin]|| CLI_Menu['default'])('help');
        echosetting = true;
        return (stdout);
      },
      'help': function(stdin) { //required option
        //big help statement
        stdout = '<br />HELP: HELP []<br />' + '<br  />  HELP : List all avalible commands with short help<br />  HELP [COMMAND] : Displays larger help for a give command.';
      },
      '': function(stdin) {
        //list all help
        //uses helpdir function instead each CLI_menu function
        $.each(CLI_Menu, function(key, value) {
          if (key != "default") {
            value = CLI_Menu[key]("helpdir");
            stdout = stdout + value + '<br />';
          }
        });
        stdout = '<br />Available commands:<br />' + stdout + '<br />';
      }
    };

    //Additional 'hidden menu' options
    switch (stdin){
      case 'function_menu': //required option
        //sends internal function_menu out of stdout - used for tabcomplete
        stdout = CLI_Menu; //help function differs here from normal functions.
        return (stdout);
        break;
      case 'helpdir': //required option
        //oneliner help statement
        stdout = "<strong>help</strong>: help will help you if you need help.";
        return (stdout);
        break;
      default:
        //default is to look up function_menu
        (function_menu[stdin]|| function_menu['default'])(stdin);
        break;
    }

    //normally required echo of stdout
    BasicFunctions.echo(stdout);

    //required return of stdout
    return (stdout);
  },
  sendtoserver:function(stdin){
    /*Sends stdin to the "server" (if connected).";
    */

    //required variable
    var stdout = "";
    var function_menu = "";
    stdin = stdin.toLowerCase();
    //function variables

    //function_menu structure
    function_menu = {
      'default': function(stdin) { //required option
        //default option
        stdout = "ERROR: Command not understood [<i>" + stdin + "</i>]";
      },
      'help': function(stdin) { //required option
        //big help statement
        stdout = '<br />HELP: SEND []<br />' + '<br  />  SEND [STRING] : Sends the string to the server anch echos response<br />';
      },
      /* function specific options */
      '': function(stdin) {
        //display general about information
        stdout = 'ERROR: No string detected' + stdin;
      }
    };

    //Additional 'hidden menu' options
    switch (stdin){
      case 'function_menu': //required option
        //sends internal function_menu out of stdout - used for tabcomplete
        stdout = function_menu;
        return (stdout);
        break;
      case 'helpdir': //required option
        //oneliner help statement
        stdout = "<strong>send</strong>: Sends the string to the server anch echos response.";
        return (stdout);
        break;
      default:
        //default is to look up function_menu
        (function_menu[stdin]|| function_menu['default'])(stdin);
        break;
    }

    //normally required echo of stdout
    BasicFunctions.echo(stdout);

    //required return of stdout
    return (stdout);
  },
  timestamp:function(stdin){
    /*gives the current time in various forms
    */

    //required variable
    var stdout = "";
    var function_menu = "";
    stdin = stdin.toLowerCase();
    //function variables
    var d = new Date();

    //function_menu structure
    function_menu = {
      'default': function(stdin) { //required option
        //default option
        stdout = "ERROR: This is not a valid command. Please see 'Time Help'"
      },
      'help': function(stdin) { //required option
        //big help statement
        stdout = '<br />HELP: TIME []<br />' + '<br  />  TIME : Displays current time in UK format<br />  TIME [STAMP] : Displays current unix time<br />  TIME [DATE] : Displays current date in UK format<br />  TIME [FULL] : Displays current time & date in UK format';
      },
      /* function specific options */
      'date': function(stdin) {
        //returns uk date 23/07/2015
        stdout = "" + d.toLocaleDateString("en-GB");
      },
      'full': function(stdin) {
        //returns uk date & time 23/07/2016, 20:04:08
        stdout = "" + d.toLocaleString("en-GB");
      },
      'stamp': function(stdin) {
        //returns unix time (milliseconds since midnight on 1st Jan 1970)
        stdout = "" + d.getTime();
      },
      '': function(stdin) {
        //returns unix time (milliseconds since midnight on 1st Jan 1970)
        stdout = "" + d.toLocaleTimeString("en-GB");
      }
    };

    //Additional 'hidden menu' options
    switch (stdin){
      case 'function_menu': //required option
        //sends internal function_menu out of stdout - used for tabcomplete
        stdout = function_menu;
        return (stdout);
        break;
      case 'helpdir': //required option
        //oneliner help statement
        stdout = "<strong>time</strong>: Displays the current time.";
        return (stdout);
        break;
      default:
        //default is to look up function_menu
        (function_menu[stdin]|| function_menu['default'])(stdin);
        break;
    }

    //normally required echo of stdout
    BasicFunctions.echo(stdout);

    //required return of stdout
    return (stdout);
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  },
  init_menu:function(stdin){
    /*Adds the BasicFunctions options to the
      command line menu.
    */

    //required variable
    var stdout = "";
    var function_menu = "";
    stdin = stdin.toLowerCase();
    //function variables

    //function_menu structure
    function_menu = {
      'default': function(stdin, cmd) { //required option
        //default option
        return BasicFunctions.sendtoserver(cmd + ' ' + stdin);
      },
      /* function specific options */
      'about': function(stdin) {
        return BasicFunctions.about(stdin);
      },
      'clear': function(stdin) {
        return BasicFunctions.cls(stdin);
      },
      'connect': function(stdin) {
        return BasicFunctions.connect(stdin);
      },
      'echo': function(stdin) {
        return BasicFunctions.echo(stdin);
      },
      'hacker': function(stdin) {
        return BasicFunctions.hacker(stdin);
      },
      'help': function(stdin) {
        return BasicFunctions.help(stdin);
      },
      'send': function(stdin) {
        return BasicFunctions.sendtoserver(stdin);
      },
      'time': function(stdin) {
        return BasicFunctions.timestamp(stdin);
      }
    };

    //Additional 'hidden menu' options
    switch (stdin){
      case 'function_menu': //required option
        //sends internal function_menu out of stdout - used for tabcomplete
        stdout = function_menu;
        return (stdout);
        break;
      default:
        //default is to look up function_menu
        (function_menu[stdin]|| function_menu['default'])(stdin);
        break;
    }

    //required return of stdout
    return (stdout);
  }
};
