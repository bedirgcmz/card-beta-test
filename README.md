## Important Links

Miro Board -> https://miro.com/app/board/uXjVKj9igWM=/?share_link_id=668279363875
Github -> https://github.com/hasuwini77/assignment-card-beta_test
PowerPoint -> https://docs.google.com/presentation/d/1B1rWQ84h9DJw8dpFTGm-8WNKGZ-nN0O8/edit?usp=sharing&ouid=108288167018774962359&rtpof=true&sd=true

## Main Idea

Card Generator

A single page application that highlight 4 cards on page load.
Each card shows:

- Name of the project
- Random Image
- Link to a webpage
- Technologies (paragraph with the tech used)

Each card also have a X button allowing the user to delete/remove a given card.

An "Add Card" Button is located on the page, if the button is clicked,
a form will appear will the following
Required Fields:

- Name of project
- Thumbnail Image (auto generated) // Field ignored in our example
- URL (link of project)
- Tech Stack (list of tech used)

The form will also include a "Cancel button" to hide the form if needed.

Functionality:
Add Cards
Remove Cards

STRUCTURE OF
COMPONENTS:

- Header

  - Maintitle

    - Subtitle

  - Navbar
    - Links

- MainContent

  - Card
  - Button
  - CardForm (hidden first)

- Footer
  - Copyright paragraph with dynamic year date
  - 3 nav links
  - Social Icons links
