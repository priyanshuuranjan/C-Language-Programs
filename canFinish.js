function canFinish(numCourses, prerequisites) {
    const graph = Array.from({length: numCourses}, () => []);
    for (let [course, pre] of prerequisites) {
        graph[pre].push(course);
    }
    const visited = new Array(numCourses).fill(0); // 0 = unvisited, 1 = visiting, 2 = visited
    function dfs(node) {
        if (visited[node] === 1) return false; // cycle
        if (visited[node] === 2) return true; // already visited
        visited[node] = 1;
        for (let neighbor of graph[node]) {
            if (!dfs(neighbor)) return false;
        }
        visited[node] = 2;
        return true;
    }

    for (let i = 0; i < numCourses; i++) {
        if (visited[i] === 0 && !dfs(i)) return false;
    }
    return true;
}

// Example
console.log(canFinish(2, [[1,0]])); // true
console.log(canFinish(2, [[1,0],[0,1]])); // false
