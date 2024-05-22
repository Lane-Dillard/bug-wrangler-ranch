# Welcome to Bug Wrangler Ranch

This first self-assessment is for you to hone several Core Skills that you need as a software developer.

Taking your time now to be thorough, reflective, patient and curious will give you the foundation to be successful throughout the rest of this course and your career.

If you rush this, or think of it as a test to be "passed", then you will already be on the wrong path.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Description

Slim Jenkins offers a vacation package for people who have always wanted to join a cattle driving team across the American Midwest.

He calls it the **Kansas Slim's Cattle Adventure**.

People join a team of experienced drovers who will train them in the basics of herding cattle and driving them across hundreds of miles to their destination at Old Red's Ranch.

Unfortunately, someone gained access to the code that produces an outline of the adventure to the paying customers, so Slim has hired you to examine and fix the code.

## Learning Objectives

Here are your learning objectives for this self-assessment.

1. Able to use the debugger to step through existing code to discover root causes of bugs.
2. Drawing a sequence diagram for a project.
   > Use the [sequencediagram.org](https://sequencediagram.org/) site to generate your sequence diagram. Make sure you save your work as you go.
3. Demonstrate learning efficiency by researching concepts you haven't seen before using your peers, mentors, and the World Wide Web as resources.
4. Awareness of when you need help, and then seeking it out.

## Starter Code

Slim Jenkins has the existing code on Github, so you need to download it from there. Actually, developers call this process _cloning a repository_.

In your terminal, to go your workspace directory.

```sh
cd ~/workspace
```

Then clone the repository to your machine with the following command.

```sh
git clone https://github.com/Nashville-Software-School-Assessments/bug-wrangler-ranch.git
```

This will create a new sub-directory called `bug-wrangler-ranch`. Use the `cd` command to navigate into that directory and open it in VS Code.

```sh
cd bug-wrangler-ranch
code .
```

Open the `main.js` and create your `launch.json` so that you can debug the code starting with `main.js`. Then run the program and start the investigation.

## Example Output

If you are able to fix all of the bugs, you will output similar to what is below.

```sh
************************************************
**  K A N S A S   S L I M ' S   C A T T L E   **
************************************************

\|/         (__)
     '------(oo)
       ||   (__)               \|/
       ||w--||     \|/
   \|/
            \|/                     (__)
                             '------(oo)
                               ||   (__)
                               ||w--||     \|/

You will be accompanying 5 drovers as they drive 50 cattle to Old Red's Ranch for grazing

The herd is made of up the following types of cattle:
Ankole-Watusi,Brown Swiss,Brown Swiss,American Angus,Brown Swiss,
Ankina,American Angus,Ankina,Brown Swiss,Ankole-Watusi,Brown Swiss,
Brown Swiss,American Angus,Ankina,Ankole-Watusi,Brown Swiss,Brown Swiss,
Ankina,Brown Swiss,Ankina,Ankole-Watusi,Brown Swiss,Brown Swiss,
Ankole-Watusi,American Angus,Brown Swiss,American Angus,Ankole-Watusi,
Ankole-Watusi,American Angus,Ankina,Ankina,Ankina,Ankole-Watusi,
American Angus,Brown Swiss,American Angus,Brown Swiss,American Angus,
American Angus,Ankina,Brown Swiss,American Angus,Ankina,Brown Swiss,
American Angus,Ankole-Watusi,Ankina,American Angus,Brown Swiss

Here is the team of drovers you will be joining
        * Melvyn Hethron
        * Yancy Gresley
        * Willabella Attarge
        * Ynes Gyenes
        * Farlie Spere


Your journey will take you through the wildness of the American Midwest and across the following terrain
        * forest
        * plain
        * river
        * mountain
```

## Vocabulary and Understanding

> 🧨 Before you click the "Assessment Complete" button on the Learning Platform, add your answers below for each question and make a commit. It is your option to request a face-to-face meeting with a coach for a vocabulary review.

1. In the **main** module, one of the first lines of code is `const drovers = hireDrovers(cattleToDrive)`. Explain what the value of the `drovers` variable is when that line of code runs.
   > drovers in main.js which is equal to hireDrovers(cattleToDrive). Which calls the function in the drovers.js module. Which goes through the process of weeding out allDrovers till there are five drovers which will be returned to main.js in a form of an array.

2. At the bottom of the main module, you will see the following code - `for (const drover of drovers)`. Explain what the values of both the `drover` and the `drovers` variables are.
   > In the, for(const drover of drovers) drover is the current objects that's within the array of drovers.

3. In the **journey** module, there is a `journeyMaker()` function. In that function, there is a variable named `areas` which will have the value of an object. Use your debugger to show what the value of each key is on that object. Use [Loom](https://www.loom.com) to record your session.
   > https://www.loom.com/share/829c442be793441db5224480f41c01f7?sid=3206f560-cd4d-42ce-8f3c-4c426b3f3791

4. Also in the **journey** module, there is the following code:
   ```js
   for (let forestNumber = 0; forestNumber < areas.forests; forestNumber++) {
      journey.push("forest")
   }
   ```
   Explain this code with your best vocabulary.
   > In it, it'll have the initialization of forestNumber which starts at 0 and has a condition of forestNumber and areas.forest (areas.forest is determined in a variable called areas that calls the function createForest() and that creates the value of areas.forest). then has a iteration which is forestNumber++ which adds the value of 1 to forestNumber after the condition has been processed. While forestNumber is less than areas.forest is true will add a string "forest" to the end of the array called journey.

5. Explain the value of the `database` variable in the **database** module. Be as comprehensive as possible.
   > database is a object that holds two separate arrays one called cattleTypes which has four objects that described by two elements in each object by id: and breed:. The other array is drovers with fifty objects which is described by id:, first-name, last-name, and gender.
6. In the **drovers** module, there is a `hireDrovers()` function. You will notice the following code on that line - `(herdSize)`. What is that defining, and where does it get its value?
   > herdSize wasn't really defining anything at the start so I replaced it with cattleToDrive which is the herd amount that's meant to be divided for the amount of cattle per drover which in numberNeeded 


## Final Step

Now you need to upload your code to Github so a coach can review it and the answers to your vocabulary and understanding questions. Watch the <a href="https://app.screencastify.com/v3/watch/AwPn0FXfji60TxHuUVkU" target="_blank">Sharing assessment repository<a> video for instructions on how to do it.
