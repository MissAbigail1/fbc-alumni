# FBC Alumni Network - User Flow & Workflow Documentation

## 1. AUTHENTICATION FLOW

```
┌─────────────────┐
│  Landing Page   │
│    (Home)       │
└────────┬────────┘
         │
         ├─ Logged In? ─── NO ──┐
         │                      │
         └─ YES ────┐           │
                    │           │
            ┌──────┴──────┐     │
            │             │     │
       [View App]    [New User?]
            │             │
            │             └─ YES ──┐
            │                      │
            │                  ┌───┴────────┐
            │                  │  Signup    │
            │              (Fill Form)      │
            │                  │            │
            │              ┌───┴───────┐    │
            │              │ Save to   │    │
            │              │ localStorage   │
            │              └───┬───────┘    │
            │                  │            │
            │                  └─ Verify ───┘
            │                      │
            └──────────────────────┤
                                   │
                              ┌────┴─────┐
                              │  Redirect │
                              │   to Home │
                              └───────────┘
```

---

## 2. HOME PAGE FLOW (Pre-Login User)

```
┌─────────────────────────────────────────┐
│        HOME PAGE (Not Logged In)        │
├─────────────────────────────────────────┤
│  Header: "Join the FBC Alumni Network"  │
│         (Multi-line with Gold text)     │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │  Navbar (Pre-Login Version)     │   │
│  │  ├─ About Us (Dropdown)         │   │
│  │  │  ├─ Alumni Executives        │   │
│  │  │  ├─ Constitutional & Bylaws  │   │
│  │  │  └─ History                  │   │
│  │  ├─ Donate                      │   │
│  │  └─ Join Now (CTA)              │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │  Chapters Section               │   │
│  │  ├─ Chapter Card 1              │   │
│  │  │  ├─ Name, Members count      │   │
│  │  │  └─ [Join Chapter] Button ───┼──┐│
│  │  ├─ Chapter Card 2              │  ││
│  │  │  └─ [Join Chapter] Button ───┼──┼┤
│  │  └─ Chapter Card N              │  ││
│  └─────────────────────────────────┘  ││
│                                       ││
│  ┌─────────────────────────────────┐  ││
│  │  Events Section                 │  ││
│  │  ├─ Event 1                     │  ││
│  │  ├─ Event 2                     │  ││
│  │  └─ Event N                     │  ││
│  └─────────────────────────────────┘  ││
│                                       ││
│  ┌─────────────────────────────────┐  ││
│  │  Donation CTA Button            │  ││
│  └─────────────────────────────────┘  ││
└─────────────────────────────────────────┘│
                                           │
                ┌──────────────────────────┤
                │ Click Join Chapter       │
                │                          │
        ┌───────┴────────────┐             │
        │                    │             │
    Not Logged In?      User Logged In?    │
        │                    │             │
        │                    └─ YES ──┐    │
        │                             │    │
    ┌───┴─────┐               ┌──────┴────┤
    │ Redirect│               │  Show     │
    │  to     │               │  Join     │
    │ Signup  │               │  Modal    │
    └────┬────┘               └──────┬────┘
         │                           │
    ┌────┴──────────────────────────┐│
    │      ┌──────────────────────┐ ││
    │      │  JOIN MODAL          │ ││
    │      │  Message:            │ ││
    │      │  "Thank you for      │ ││
    │      │   your interest...   │ ││
    │      │   President will     │ ││
    │      │   review your        │ ││
    │      │   request"           │ ││
    │      │                      │ ││
    │      │ [Confirm] [Cancel]   │ ││
    │      └──────────────────────┘ ││
    │                               ││
    └───────┬───────────────────────┘│
            │                        │
        ┌───┴────┐              ┌────┴──┐
        │ Confirm│              │ Cancel│
        │        │              │       │
    ┌───┴──┐  ┌──┴────────┐  ┌──┴────────┐
    │Save  │  │ Close     │  │  Close    │
    │to    │  │ Modal &   │  │  Modal &  │
    │Local │  │ Return    │  │  Return   │
    │Reload│  │ to Page   │  │ to Page   │
    └──────┘  └───────────┘  └───────────┘
```

---

## 3. HOME PAGE FLOW (Logged-In User)

```
┌─────────────────────────────────────────┐
│      HOME PAGE (Logged In User)         │
├─────────────────────────────────────────┤
│                                         │
│  ┌─────────────────────────────────┐   │
│  │  Navbar (Post-Login Version)    │   │
│  │  ├─ About Us (Dropdown)         │   │
│  │  ├─ Donate                      │   │
│  │  ├─ 🔔 Notifications Badge      │   │
│  │  └─ 👤 Profile Avatar (Dropdown)    │
│  │     ├─ View Profile             │   │
│  │     ├─ Edit Profile             │   │
│  │     ├─ Settings                 │   │
│  │     └─ Logout                   │   │
│  └─────────────────────────────────┘   │
│                                         │
│  [Same as above, but showing joined    │
│   chapter announcements when chapter   │
│   is viewed]                            │
│                                         │
└─────────────────────────────────────────┘
```

---

## 4. JOIN CHAPTER COMPLETE FLOW

```
START: User clicks "Join Chapter" button
│
├─ Check: Is user logged in?
│  │
│  ├─ NO  ──┐
│  │        │
│  └─ YES ──┤
│           │
│       ┌───┴──────────────────────────┐
│       │ NOT LOGGED IN PATH          │
│       │                              │
│       ├─ Redirect to Signup (/signup)│
│       │ └─ User creates account      │
│       │    └─ Returns to Home        │
│       │                              │
│       └──────────┬───────────────────┘
│                  │
│       ┌──────────┴───────────────────┐
│       │ LOGGED IN PATH               │
│       │                              │
│       ├─ Show Confirmation Modal     │
│       │ ├─ Display Chapter Name      │
│       │ ├─ Show Presidential Review  │
│       │ │  Message                   │
│       │ └─ [Confirm] [Cancel] BTNs   │
│       │                              │
│       ├─ User Click Confirm?         │
│       │ │                            │
│       │ ├─ YES ─┐                    │
│       │ │       │                    │
│       │ └─ NO ──┤                    │
│       │         │                    │
│       └─────────┤                    │
│                 │                    │
│        ┌────────┴──────┐             │
│        │               │             │
│    ┌───┴────┐     ┌────┴────┐       │
│    │ Confirm│     │ Cancel   │       │
│    │        │     │          │       │
│    ├─ Save  │     ├─ Close   │       │
│    │ to     │     │ Modal    │       │
│    │ Local  │     ├─ Stay on │       │
│    │Storage │     │ Home Page│       │
│    ├─ Close │     └──────────┘       │
│    │ Modal  │                        │
│    ├─ Reload│                        │
│    │ Page   │                        │
│    └────────┘                        │
│
END: User redirected or returned to page
```

---

## 5. PROFILE PAGE FLOW

```
┌──────────────────────────────────────────┐
│        PROFILE PAGE (Logged In)          │
├──────────────────────────────────────────┤
│                                          │
│  Header: "My Profile"                   │
│  ├─ [Back] button → Navigate to Home     │
│                                          │
│  Profile Card (Main Section)            │
│  ├─ Profile Image (Circular, Large)     │
│  ├─ Membership Status Badge             │
│  │                                      │
│  ├─ Quick Actions:                      │
│  │  ├─ [Edit Profile] Button ──┐        │
│  │  └─ [Settings] Button ──────┼─┐      │
│  │                              │ │      │
│  └─ Profile Information Grid:   │ │      │
│     ├─ Email                    │ │      │
│     ├─ Location                 │ │      │
│     ├─ Occupation               │ │      │
│     ├─ Graduation Year          │ │      │
│     ├─ Chapter                  │ │      │
│     └─ Member Since             │ │      │
│                                 │ │      │
│  About Section                  │ │      │
│  └─ Bio/Biography Text          │ │      │
│                                 │ │      │
└─────────────────────────────────┼─┼──────┘
                                  │ │
                    ┌─────────────┘ │
                    │               │
                ┌───┴────┐     ┌────┴────┐
                │ Edit   │     │ Settings│
                │Profile │     │         │
                └────┬───┘     └────┬────┘
                     │              │
              ┌──────┴──┐    ┌──────┴──────┐
              │ Go to   │    │ Go to       │
              │ /edit-  │    │ /settings   │
              │ profile │    │             │
              └─────────┘    └─────────────┘
```

---

## 6. EDIT PROFILE PAGE FLOW

```
┌──────────────────────────────────────────┐
│      EDIT PROFILE PAGE (Logged In)       │
├──────────────────────────────────────────┤
│                                          │
│  Header: "Edit Profile"                 │
│  ├─ [Back] button → Navigate to Profile  │
│                                          │
│  Edit Form:                              │
│  ├─ Profile Image Upload                │
│  │  ├─ Current Image Preview            │
│  │  └─ [Upload New Image] Button        │
│  │                                       │
│  ├─ Name (Text Input)                   │
│  ├─ Email (Text Input)                  │
│  ├─ Location (Text Input)               │
│  ├─ Occupation (Text Input)             │
│  ├─ Graduation Year (Date/Number)       │
│  ├─ Chapter (Dropdown Select)           │
│  ├─ Bio/About (Textarea)                │
│  │                                       │
│  └─ Form Actions:                       │
│     ├─ [Save Changes] Button ─┐         │
│     └─ [Cancel] Button ────────┼─┐      │
│                                │ │      │
└────────────────────────────────┼─┼──────┘
                                 │ │
                    ┌────────────┘ │
                    │              │
                ┌───┴────┐     ┌────┴────┐
                │ Save   │     │ Cancel  │
                │Changes │     │         │
                └────┬───┘     └────┬────┘
                     │              │
              ┌──────┴──────┐  ┌────┴────────┐
              │ Validate    │  │ Discard     │
              │ Form        │  │ Changes     │
              │             │  │             │
              ├─ Save to    │  └─ Navigate   │
              │ localStorage│   to Profile  │
              │             │              │
              └─ Navigate   │              │
                to Profile  │              │
                            │              │
                    NOTE: Image uploads
                    limited by localStorage
                    (~5-10MB). Backend needed
                    for production.
```

---

## 7. SETTINGS PAGE FLOW

```
┌──────────────────────────────────────────┐
│       SETTINGS PAGE (Logged In)          │
├──────────────────────────────────────────┤
│                                          │
│  Header: "Settings"                     │
│  ├─ [Back] button → Navigate to Profile  │
│                                          │
│  ┌─ NOTIFICATIONS SECTION ──────────────┐
│  │ ├─ Email Notifications [Toggle]      │
│  │ ├─ Event Updates [Toggle]            │
│  │ ├─ Chapter Updates [Toggle]          │
│  │ └─ Update Frequency: [Dropdown]      │
│  │    └─ Options: Daily/Weekly/Monthly  │
│  └───────────────────────────────────────┘
│                                          │
│  ┌─ PRIVACY SECTION ─────────────────────┐
│  │ ├─ Private Profile [Toggle]           │
│  │ ├─ Show Email [Toggle]                │
│  │ ├─ Show Location [Toggle]             │
│  │ ├─ Show Occupation [Toggle]           │
│  │ └─ Visibility: [Dropdown]             │
│  │    └─ Options: Public/Members/Private│
│  └───────────────────────────────────────┘
│                                          │
│  ┌─ SECURITY SECTION ────────────────────┐
│  │ ├─ Two-Factor Auth [Toggle]           │
│  │ ├─ Data Retention: [Dropdown]         │
│  │ │  └─ Options: 6mo/1yr/2yr/Forever   │
│  │ ├─ [Change Password] Button ──┐      │
│  │ ├─ [Download Data] Button ────┼──┐   │
│  │ └─ [Delete Account] Button ────┼──┼─┐│
│  └───────────────────────────────────────┘│
│                                          │
│  ┌─ ACCOUNT SECTION ─────────────────────┐
│  │ ├─ Account Email Display             │
│  │ ├─ Member Since: Date Display        │
│  │ ├─ [Logout] Button ─────────────┐    │
│  │ └─ [Delete Account] Button      │    │
│  └────────────────────────────────┼────┘
│                                   │
└───────────────────────────────────┼──────┘
                                    │
                    ┌───────────────┴────────┐
                    │                        │
              ┌─────┴────┐           ┌──────┴──────┐
              │ Any Action│           │  Logout    │
              │(Toggles/  │           │            │
              │Dropdowns) │           └──────┬─────┘
              │           │                  │
              └─ Changes  │          ┌───────┴──────┐
                saved to  │          │ Clear        │
                local     │          │ localStorage │
                storage   │          │              │
                (UI only) │          └──────┬───────┘
                          │                 │
                          │        ┌────────┴────────┐
                          │        │ Redirect to    │
                          │        │ Home/Signup    │
                          │        │ (Not Logged In)│
                          │        └────────────────┘
                          │
                    NOTE: All settings are UI-only.
                    Backend needed for real persistence.
```

---

## 8. CHAPTERS PAGE FLOW

```
┌──────────────────────────────────────────┐
│       CHAPTERS PAGE (Chapter Details)    │
├──────────────────────────────────────────┤
│                                          │
│  Header: [Back] Chapter Name             │
│  ├─ [Back] button → Navigate to Home     │
│                                          │
│  ┌─ CHAPTER DETAILS ─────────────────────┐
│  │ ├─ Chapter Image                      │
│  │ ├─ Chapter Name (Title)               │
│  │ ├─ Description/Bio                    │
│  │ ├─ Member Count                       │
│  │ ├─ Contact Info                       │
│  │ ├─ President Name                     │
│  │ └─ [Back to Home] Button              │
│  └───────────────────────────────────────┘
│                                          │
│  ┌─ ANNOUNCEMENTS (CONDITIONAL) ────────┐
│  │                                      │
│  │ Visible ONLY if:                    │
│  │ └─ User is logged in AND           │
│  │    └─ User has joined chapter      │
│  │                                      │
│  │ Content:                             │
│  │ ├─ Announcement Card 1              │
│  │ │  ├─ Title                         │
│  │ │  ├─ Content                       │
│  │ │  └─ Date Posted                   │
│  │ ├─ Announcement Card 2              │
│  │ └─ Announcement Card N              │
│  │                                      │
│  │ NOT VISIBLE for:                    │
│  │ ├─ Non-logged-in users              │
│  │ └─ Logged-in but not-joined users   │
│  └───────────────────────────────────────┘
│                                          │
│  ┌─ MEMBERS LIST ────────────────────────┐
│  │ ├─ Member 1                           │
│  │ ├─ Member 2                           │
│  │ └─ Member N                           │
│  └───────────────────────────────────────┘
│                                          │
└──────────────────────────────────────────┘
```

---

## 9. SIGNUP PAGE FLOW

```
┌──────────────────────────────────────────┐
│         SIGNUP PAGE (New User)           │
├──────────────────────────────────────────┤
│                                          │
│  Header: "Create Alumni Account"        │
│                                          │
│  Signup Form:                            │
│  ├─ Full Name (Text Input)              │
│  ├─ Email (Email Input)                 │
│  ├─ Password (Password Input)           │
│  ├─ Confirm Password (Password Input)   │
│  ├─ Graduation Year (Date/Number)       │
│  ├─ Chapter (Dropdown Select)           │
│  ├─ Location (Text Input)               │
│  │                                       │
│  └─ Form Actions:                       │
│     ├─ [Create Account] Button ─┐       │
│     ├─ [Clear Form] Button ──────┼──┐   │
│     └─ "Already have account?    │  │   │
│        [Login here]" Link ───────┼──┼─┐ │
│                                  │  │ │ │
└──────────────────────────────────┼──┼─┼─┤
                                   │  │ │ │
                    ┌──────────────┘  │ │ │
                    │                 │ │ │
              ┌─────┴────────┐   ┌────┴─┼─┤
              │ Create       │   │ Clear│ │
              │ Account      │   │      │ │
              └────┬────────┘   └──────┘ │
                   │                      │
            ┌──────┴──────────────┐      │
            │                     │      │
       ┌────┴─────┐         ┌─────┴──────┤
       │ Validate  │         │ Go to     │
       │ Form Data │         │ Login     │
       │           │         │ Page      │
       ├─ Check    │         └───────────┘
       │ Empty     │
       │ Fields    │
       │           │
       ├─ Check    │
       │ Email     │
       │ Format    │
       │           │
       ├─ Check    │
       │ Password  │
       │ Strength  │
       │           │
       └─ If OK:   │
         Save to   │
         localStorage
         (fbc_joined_chapter,
          fbc_user_profile)
         │
         ├─ Redirect to
         │  Home (/home)
         │
         └─ User logged
            in
```

---

## 10. ABOUT US DROPDOWN FLOW

```
┌────────────────────────────────────────────┐
│         ABOUT US DROPDOWN                  │
├────────────────────────────────────────────┤
│                                            │
│  [About Us] ▼  (Button with Chevron)      │
│       │                                    │
│       ├─ On Hover: Chevron rotates        │
│       ├─ On Click: Dropdown toggles       │
│       │                                    │
│       └─ Show/Hide Dropdown Menu:         │
│          │                                 │
│          ├─ [Alumni Executives] ─┐        │
│          │   Navigates to        │        │
│          │   /alumni-executives  │        │
│          │                       │        │
│          ├─ [Constitutional &    │        │
│          │  Bylaws] ─────────────┼────┐   │
│          │   Navigates to        │    │   │
│          │   /constitutional-    │    │   │
│          │   bylaws              │    │   │
│          │                       │    │   │
│          └─ [History] ───────────┼────┼──┐
│              Navigates to        │    │  │
│              /history            │    │  │
│                                  │    │  │
└──────────────────────────────────┼────┼──┤
                                   │    │  │
                    ┌──────────────┘    │  │
                    │                   │  │
              ┌─────┴──────┐      ┌─────┴──┤
              │ Go to page│      │ Go to  │
              │ (empty    │      │ page   │
              │ for now)  │      │(empty) │
              └───────────┘      └────────┘
              
  Appears in:
  - Main Navbar (Logged In)
  - Home Page Hero Navbar (Not Logged In)
```

---

## 11. LOCAL STORAGE DATA STRUCTURE

```
localStorage Keys:
│
├─ fbc_joined_chapter
│  └─ Value: Chapter ID (e.g., "usa-chapter")
│     └─ Indicates: User is logged in + chapter joined
│
├─ fbc_user_profile
│  └─ Value: {
│      "id": 1,
│      "name": "User Name",
│      "email": "user@email.com",
│      "profileImage": "base64 string",
│      "chapter": "USA",
│      "graduationYear": 2015,
│      "location": "New York, USA",
│      "occupation": "Software Engineer",
│      "bio": "User bio text",
│      "joinedDate": "January 2024",
│      "membershipStatus": "Active"
│    }
│
└─ fbc_user_settings
   └─ Value: {
      "notifications": {
        "email": true,
        "events": true,
        "chapter": true,
        "frequency": "weekly"
      },
      "privacy": {
        "privateProfile": false,
        "showEmail": true,
        "showLocation": true,
        "visibility": "public"
      },
      "security": {
        "twoFactor": false,
        "dataRetention": "1yr"
      }
    }
```

---

## 12. NAVIGATION HIERARCHY

```
HOME (Landing/Main Hub)
│
├─ CHAPTERS
│  └─ [Chapter Detail Page]
│     ├─ Announcements (if member)
│     ├─ Members List
│     └─ Back to Home
│
├─ EVENTS
│  └─ Event Details
│
├─ ABOUT US (Dropdown)
│  ├─ Alumni Executives
│  ├─ Constitutional & Bylaws
│  └─ History
│
├─ DONATE
│
├─ PROFILE (if logged in)
│  ├─ Edit Profile
│  │  └─ Back to Profile
│  ├─ Settings
│  │  └─ Back to Profile
│  └─ Back to Home
│
└─ SIGNUP (if not logged in)
   └─ Back/Home
```

---

## 13. AUTHENTICATION STATE MANAGEMENT

```
┌─────────────────────────────────────────┐
│   Authentication Status Detection       │
├─────────────────────────────────────────┤
│                                         │
│  Check: localStorage.joinedChapterId    │
│  │                                      │
│  ├─ Exists (has value) ──┐             │
│  │                        │             │
│  └─ Does NOT exist ───────┼────┐        │
│                           │    │        │
│        ┌──────────────────┘    │        │
│        │                       │        │
│    ┌───┴────────┐    ┌────────┴────┐  │
│    │ LOGGED IN  │    │ NOT LOGGED IN│  │
│    │            │    │              │  │
│    ├─ Show      │    ├─ Show Signup │  │
│    │ Profile    │    │ CTA          │  │
│    │ Avatar     │    │              │  │
│    ├─ Show      │    ├─ Show Login  │  │
│    │ Settings   │    │ Link         │  │
│    ├─ Show      │    │              │  │
│    │ Edit Btn   │    ├─ Redirect    │  │
│    ├─ Show      │    │ Join Clicks  │  │
│    │ Member     │    │ to Signup    │  │
│    │ Content    │    │              │  │
│    ├─ Show      │    └──────────────┘  │
│    │ Annnce.    │                       │
│    │ in Chpts   │                       │
│    └────────────┘                       │
│                                         │
└─────────────────────────────────────────┘
```

---

## 14. CONTENT VISIBILITY RULES

```
┌──────────────────────────────────────────┐
│     What Users Can See                   │
├──────────────────────────────────────────┤
│                                          │
│  NOT LOGGED IN:                          │
│  ├─ Home Page (all sections)             │
│  ├─ Chapter Cards (name, members)        │
│  ├─ About Us pages                       │
│  ├─ Events (general info)                │
│  ├─ Donate page                          │
│  │                                       │
│  ├─ HIDDEN:                              │
│  │ ├─ Profile pages                      │
│  │ ├─ Settings                           │
│  │ ├─ Announcements (in chapters)        │
│  │ ├─ Members list (in chapters)         │
│  │ └─ Notification badge                 │
│  │                                       │
│  └─ PROMPT ON CLICK:                     │
│     └─ [Join Chapter] → Redirect signup  │
│                                          │
│  ─────────────────────────────────────   │
│                                          │
│  LOGGED IN (not joined chapter):         │
│  ├─ All not-logged-in content            │
│  ├─ Profile page                         │
│  ├─ Settings page                        │
│  ├─ Edit Profile page                    │
│  ├─ Chapter names and details            │
│  │                                       │
│  ├─ HIDDEN:                              │
│  │ ├─ Announcements (for non-joined)    │
│  │ └─ Members list (for non-joined)     │
│  │                                       │
│  └─ PROMPT ON CLICK:                     │
│     └─ [Join Chapter] → Show modal       │
│                                          │
│  ─────────────────────────────────────   │
│                                          │
│  LOGGED IN (joined chapter):             │
│  ├─ All previous content                 │
│  ├─ Announcements (for joined chapter)   │
│  ├─ Members list (for joined chapter)    │
│  └─ Chapter-specific content             │
│                                          │
└──────────────────────────────────────────┘
```

---

## 15. ERROR HANDLING FLOWS

```
┌──────────────────────────────────────────┐
│       Error Scenarios & Recovery         │
├──────────────────────────────────────────┤
│                                          │
│  ┌─ Form Validation Errors ──────────────┐
│  │ ├─ Empty fields → Show error message  │
│  │ ├─ Invalid email → Show error message │
│  │ ├─ Weak password → Show error message │
│  │ └─ Mismatch passwords → Show error msg│
│  └───────────────────────────────────────┘
│                                          │
│  ┌─ localStorage Quota Exceeded ────────┐
│  │ ├─ Occurs: When uploading large image│
│  │ ├─ Current: Base64 encoding creates  │
│  │ │            large strings           │
│  │ ├─ Message: "Quota exceeded"         │
│  │ ├─ Workaround: Upload smaller image  │
│  │ └─ Solution: Backend image hosting   │
│  └───────────────────────────────────────┘
│                                          │
│  ┌─ Page Not Found (404) ────────────────┐
│  │ └─ Invalid route → Redirect home      │
│  └───────────────────────────────────────┘
│                                          │
│  ┌─ Session Expired ─────────────────────┐
│  │ ├─ localStorage cleared              │
│  │ ├─ User redirected to home            │
│  │ └─ User prompted to login again       │
│  └───────────────────────────────────────┘
│                                          │
└──────────────────────────────────────────┘
```

---

## 16. USER JOURNEY SCENARIOS

### Scenario A: New User Discovery
```
1. User lands on Home (Not logged in)
2. Browses chapters & events
3. Clicks "Join Chapter" button
4. Redirected to Signup page
5. Creates account with name, email, password
6. Profile saved to localStorage
7. Redirected to Home (now logged in)
8. Clicks "Join Chapter" again
9. See confirmation modal
10. Confirms join
11. Chapter saved to localStorage
12. Page reloads
13. Now sees announcements
```

### Scenario B: Returning Member
```
1. User visits site (localStorage has data)
2. Navbar shows profile avatar
3. Clicks profile → Goes to Profile page
4. Views current information
5. Clicks "Edit Profile" → Goes to Edit page
6. Updates info and saves
7. Returns to Profile page
8. Clicks "Settings" → Goes to Settings page
9. Enables notifications & privacy settings
10. All changes saved to localStorage
11. Clicks back → Returns to Profile
12. Clicks "Back" → Returns to Home
```

### Scenario C: Chapter Announcements Access
```
1. User logged in (not member yet)
2. Goes to chapter details
3. Tries to see announcements → HIDDEN
4. Clicks "Join Chapter"
5. Confirms in modal
6. Page reloads
7. Announcements now VISIBLE
8. Can read all chapter updates
```

---

## 17. KEY DECISION POINTS IN USER FLOW

```
┌─────────────────────────────────────────┐
│     Critical Flow Decision Points        │
├─────────────────────────────────────────┤
│                                         │
│  1. Is user logged in?                  │
│     └─ Determines navbar type           │
│                                         │
│  2. Does user have localStorage data?   │
│     └─ Determines home page variant     │
│                                         │
│  3. Is user part of a chapter?          │
│     └─ Determines content visibility    │
│                                         │
│  4. User clicks "Join Chapter"          │
│     ├─ If not logged in → Signup        │
│     └─ If logged in → Modal             │
│                                         │
│  5. User clicks back button             │
│     ├─ Profile → Home                   │
│     ├─ Edit Profile → Profile           │
│     ├─ Settings → Profile               │
│     └─ Chapter → Home                   │
│                                         │
│  6. User clicks profile avatar          │
│     ├─ View Profile → Profile page      │
│     ├─ Edit Profile → Edit page         │
│     ├─ Settings → Settings page         │
│     └─ Logout → Clear storage, Home     │
│                                         │
│  7. User clicks "About Us"              │
│     └─ Dropdown shows 3 options         │
│                                         │
│  8. User clicks "Donate"                │
│     └─ Navigate to Donate page          │
│                                         │
│  9. User clicks notification bell       │
│     └─ Show notification dropdown       │
│                                         │
│  10. User clicks "Logout"               │
│      ├─ Clear localStorage              │
│      ├─ Reset auth state                │
│      └─ Redirect to Home (not logged in)│
│                                         │
└─────────────────────────────────────────┘
```

---

## Summary

This user flow documentation covers:

✅ **Authentication**: Login/Signup flow with localStorage  
✅ **Navigation**: Multi-level menu hierarchy with dropdowns  
✅ **Chapter Management**: Join flow with modal confirmation  
✅ **Profile Management**: View, edit, and settings pages  
✅ **Content Visibility**: Member-only announcements  
✅ **State Management**: localStorage-based persistence  
✅ **Error Handling**: Validation and quota exceeded scenarios  
✅ **User Scenarios**: Real-world journey examples  

**Frontend Status**: ✅ COMPLETE  
**Backend Status**: ❌ NOT IMPLEMENTED (next phase)
