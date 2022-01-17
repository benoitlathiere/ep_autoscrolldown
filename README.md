# ep_autoscrolldown

Add a checkbox to auto scroll down the pad when content is modified. No setting required. Both read-write and read-only modes are supported.

## Usage
A checkbox is added in the options panel.

A button (with an arrow) is available in the toolbar too.

And just add this to the URL to activate the module at the starting :
 *?autoscrolldown=true* or *?autoscrolldown=1*

## About
This module was originally part of an academic project for courses accessibility from  Paris 8 University (France).

## Settings
In the Etherpad 'settings.json' file, now you can add settings like this :

~~~~
...
,"ep_autoscrolldown": {
	  /**
	   * 'onload': The module should be enabled by default after the pad loading. [string]
	   * 	'on': enabled for every pad,
	   * 	'readonly': enabled for read-only pads,
	   * 	'off': no auto load, the url argument can still apply. (default)
	   */
	   "onload": "off",
	   
	   /**
	    * 'lock': The user can't change the behavior in his pad. [string]
	    * 	'on': the option is disabled in the settings panel for everyone.
	    * 	'readonly': the option is disabled in the settings panel for read-only pads.
	    * 	'off': the user can switch the setting, (default).
	    */
	   "lock": "readonly",
	   
	   /**
	    * 'displaybutton': The "one shot" scrolling button is available in the toolbar. [bool]
	    * 	yes: the button is present (default).
	    * 	false: the button is hidden (for everyone).
	    */
	   "displaybutton": true,
}
...
~~~~


## Changelog

### 0.0.10 (18 Nov. 2018)
- Fixed a bug in hooks.js which freeze pad loading.

### 0.0.9 (7 Nov. 2018)
- Fixed a bad dependance in the package.json file (removed the 'peerDependance' rule).

### 0.0.8 (5 Nov. 2018)
- Added a global option 'ep\_autoscrolldown:{_some options_}' (in the main 'settings.json') to auto activate plugin in some modes [on, off, readonly] (thanks to William H. for asking me this feature to use with deaf students!).
- Fixed broken code by loading a local Jquery lib (v3.3).
- Tests passed on Firefox 62, Chrome 69 (Windows/Android), Internet Explorer 11, Edge 42.
- Module fully compatible with Etherpad v1.7.x (and older versions from 1.3).

### 0.0.7 (March 2016)
- Added "*?autoScrollDown=1*" has a URL parameter to activate module (usefull in read-only mode).
- Added an option in settings panel.
- Added localizations (English, Français, Español).

### 0.0.6 (Oct. 2013)
- Compatible with Etherpad 1.3

### 0.0.5 (Sept. 2013)
- Alpha 2 version.


## To do

- Improving button design.
- Fixing bug on Android Browser.


## Bugs

Send me an email if you found a bug, and please specify your browser version (You can use www.html5test.com to retrieve the correct browser name/version).

## New features

Send me an email if you have some ideas for improvement! Or just to say me "Thanks Ben!" :)
