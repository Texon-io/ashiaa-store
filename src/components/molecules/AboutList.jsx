import AboutListItem from "../atoms/AboutListItem";

function AboutList() {
  return (
    <ul className="flex flex-col gap-4">
      <AboutListItem ImgPath="/images/books.png" alt="books">
        كتب مختارة بعناية من قارئة لقارئ.
      </AboutListItem>
      <AboutListItem ImgPath="/images/Gift.png" alt="gift">
        هدايا و Bookmarks بطابع شخصي.
      </AboutListItem>
      <AboutListItem ImgPath="/images/Coffe.png" alt="coffee">
        مساحة دافئة لعشّاق القراءة.
      </AboutListItem>
    </ul>
  );
}

export default AboutList;
