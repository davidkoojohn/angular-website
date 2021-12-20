
```
父：ngOnInit()
父：ngDoCheck()
父：ngAfterContentInit()
父：ngAfterContentChecked()

ngOnChanges()           // 绑定过输入属性调用
ngOnInit()              // 
ngDoCheck()             // 执行变更检测时
ngAfterContentInit()    // ngDoCheck()之后调用，只调用一次
ngAfterContentChecked() // 每次ngDoCheck()之后调用
ngAfterViewInit()       // 初始化完组件视图
ngAfterViewChecked()    // 视图的变更检测之后调用

// 视图挂载
父：ngAfterViewInit()
父：ngAfterViewChecked()


// === 更新 @Input 数据 === 
父：ngDoCheck()
父：ngAfterContentChecked()
ngOnChanges()
ngDoCheck()
ngAfterContentChecked()
ngAfterViewChecked()
父：ngAfterViewChecked()
```



