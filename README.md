# frontend-study

node v16.16.0
yarn v3.2.0 => package.json에서 "packageManager": "yarn@3.3.1" 추가했고
.yarn/releases 에도 yarn-3.3.1로 되어있음 근데 여기 로컬 환경에서는 3.2.0으로 찍힘

패키지 설치할 때 node v16.17 이상 버전에서 에러가 나는 경우가 있는데
v16.16.0 버전으로 설치하면 에러가 사라진다.
https://github.com/nodejs/node/blob/main/doc/changelogs/CHANGELOG_V16.md#experimental-esm-loader-hooks-api 이거때문인거 같은데

근데 node v16.17 + yarn v.3.2.2 에서는 에러가 안난다고는 한다.

node 버전, yarn 버전, .yarn/releases 버전, package.json > packageManger 버전 등을 확인하자
