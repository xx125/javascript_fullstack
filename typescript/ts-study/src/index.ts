function greeter(person: string) {    // 必须限定类型(首字母小写)，因为设置了不允许any
  return "hello" + person
}

const user = "HARORO" 

greeter(user)