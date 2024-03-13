export default function HobbyLinks() {
    const hobbyLinks = [
        "https://www.radiohelsinki.fi/ohjelma/radio-helsinki-20-vuotta/",
        "https://www.wxnafm.org/#home-section"
    ];
    return(
        <div>
            <a href = {hobbyLinks[0]}>Link text...</a>
            <a href = {hobbyLinks[1]}>Link text...</a>
        </div>
    );
}