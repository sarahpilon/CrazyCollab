/**
 *
 * TO DO:
 * - Create frontend to select meeting time
 * - Once meeting time is selected, have new component thing to confirm
 *   attendees and enter their emails, one per line and confirm name of meeting
 * - Sending information back here to send invite
 *
 * - back to frontend with confirmation
 *
 */


/**
 * Service Account Auth - server creates events on behalf of host
 * No user login required for each meeting
 */
import { google } from "googleapis";
import { givenEmails } from "./controller.mjs";



/**
 * Event with attendees runs only after authorization is already done
 */
async function SentEvent(app) {
  // linked from controller, because its called from authorization 
  app.post("/collab/oauth/callback", async (req, res) => {
    console.log("Autorization works")


    try {
      // get code from authorization 
      const { code } = req.body;

      // get permissions so event can be made
      const oauth2Client = new google.auth.OAuth2(
        process.env.CLIENT_ID,
        process.env.CLIENT_SECRET,
        process.env.REDIRECT_URI
      );

      const { tokens } = await oauth2Client.getToken(code);

      oauth2Client.setCredentials(tokens);

      const calendar = google.calendar({ version: "v3", auth: oauth2Client });

      // from google itself
      const event = {
        summary: "Group Meeting",   // <-- this can be made into a variable similar to gmail
        start: {
          dateTime: "2026-03-10T09:00:00-07:00", // same with this and end time
          timeZone: "America/Los_Angeles",
        },
        end: {
          dateTime: "2026-03-10T09:00:00-07:00",  // can be changed
          timeZone: "America/Los_Angeles",
        },
        attendees: givenEmails.map(email => ({ email }))   // <-- format of what name and start/end time will look like
      };

      // wait for authorization to work BEFORE event to be added
      const response = await calendar.events.insert({
        calendarId: "primary",
        resource: event,
      });

      console.log('Invite made :D')

      // save access token of user
      res.json({
        accessToken: tokens.access_token,
        refreshToken: tokens.refresh_token,
        eventLink: response.data.htmlLink,
      });
    } catch (err) {
      console.error("authorization failed", err);
    }
  });
}







export {SentEvent}