function removeSpace2(text: string | undefined | null) {
  return text.replaceAll(' ', '');
}
//오류 발생! (undefined, null)은 text method를 사용할 수 없으니까
//좁히기 + as any로 단언해야한다.

function removeSpace(text: string): string;
function removeSpace(text: undefined | null): undefined;
function removeSpace(text: string | undefined | null) {
  if (typeof text === 'string') {
    return text.replaceAll(' ', '');
  } else {
    return undefined;
  }
}
