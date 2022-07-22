
// d3.select('body').append("p").text("New paragraph!");

let dataset = [5, 10, 15, 20, 25]

d3.select("body").select("p")
    .data(dataset)  // 값마다 한 번씩 실행 전달.
    .enter()        // DOM 선택물 있는지 보고 데이터 전달. 플레이스 홀더 역할 문서요소 생성.
    .append("p")    // 플레이스 홀더 요소 가져와서 p 추가.
    .text("New paragraph!")


d3.select("body")
    .select("h1")
    .data(dataset)
    .enter()
    .append("h1")
    .text(function(d) { return d; })

console.log(d3.selectAll("p"))

d3.select("body")
    .select("h2")
    .data(dataset)
    .enter()
    .append("h2")
    .text(function(d) { return d; })
    // .attr() // HTML 속성 지정. DOM의 속성값 정함.
    .style("color", "red") // css 프로퍼티 지정. css 스타일 직접 적용.