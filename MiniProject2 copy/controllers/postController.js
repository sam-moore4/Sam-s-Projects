const loadPosts = (req,res) => {

    let post = [   
    {id: 1, title: 'JOKIC, MITCHELL NAMED PLAYERS OF THE WEEK', content:"Denver's 2-time Kia MVP and Cleveland's All-Star guard take home the honors for Week 9."},
    {id: 2, title: 'LILLARD PASSES DREXLER AS BLAZERS SCORING LEADER', content:"Lillard, 32, is the only player in franchise history with six All-NBA honors"},
    {id: 3, title: 'JOKIC DROPS 40 PTS, 27 REB and 10 AST, WHILST EMBIID CONTINUES TO STRUGGLE', content:"Jokic created a stat line yesterday to rival the great Wilt Chamberlain, whilst Embiid and the 76ers continue to struggle this season."}
];

console.log(post)
res.send(post)
}

module.exports = {loadPosts}