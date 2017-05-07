# essence-ng2-pagination

essence-ng2-pagination is a pagination component for Angular.

## Usage

1. Install

	```shell
	npm install --save essence-ng2-pagination@latest
	```
	
2. 在index.html引入bootstrap

	```html
	<link href="//cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
	```

3. Add the EssenceNg2PaginationModule

	```typescript
	import {EssenceNg2PaginationModule} from "essence-ng2-pagination";
	@NgModule({
	    imports: [
	        EssenceNg2PaginationModule
	    ]
	})
	```

4. Use in the template

	```html
	<h2>复杂分页</h2>
    <essence-ng2-pagination [totalItems]="totalItems"
                            [(ngModel)]="currentPage"
                            [maxSize]="maxSize"
                            [itemsPerPage]="itemsPerPage"
                            class="pagination-lg"
                            [boundaryLinks]="true"
                            [rotate]="false"
                            previousText="上一页"
                            nextText="下一页"
                            firstText="首页"
                            lastText="尾页"
                            (pageChanged)="pageChanged($event)">
    </essence-ng2-pagination>
    
    <h2>简单分页</h2>
    <essence-ng2-pager 	[totalItems]="totalItems"
                          [(ngModel)]="currentPage"
                          [itemsPerPage]="itemsPerPage"
                          class="pagination-lg"
                          previousText="上一页"
                          nextText="下一页"
                          (pageChanged)="pageChanged($event)">
    </essence-ng2-pager>
	```

5. Use in the component

	```typescript
	maxSize: number = 5;
	currentPage: number = 1;
	itemsPerPage: number = 20; // 每页条数
	totalItems: number = 200; // 总数

	pageChanged (event: any): void {
		console.log(event);
	};
	```

## API

### Inputs

#### Pagination

  - `rotate` (`?boolean=true`) - 如果为 `true` 则当前页始终在分页列表的中间
  - `disabled` (`?boolean=false`) - 如果为 `true` 则分页组件将被禁用
  - `totalItems` (`number`) - 总项目数
  - `itemsPerPage` (`?number=10`) - 每页的项目数， 如果小于1将在一页显示所有的项目数
  - `maxSize` (`?number=5`) - 最大显示的分页链接数
  - `boundaryLinks` (`?boolean=true`) - 如果为 `false` 则首页和末页的按钮将隐藏
  - `directionLinks` (`?boolean=true`) - 如果为 `false` 则上一页和下一页的按钮将隐藏
  - `previousText` (`?string='上一页'`) - 上一页按钮显示的文本
  - `nextText` (`?string='下一页'`) - 下一页按钮显示的文本
  - `firstText` (`?string='首页'`) - 首页按钮显示的文本
  - `lastText` (`?string='末页'`) - 末页按钮显示的文本

#### Pager

  - `align` (`?boolean=true`) - 如果为 `true` 则在页面的边上显示分页链接
  - `disabled` (`?boolean=false`) - 如果为 `true` 则分页组件将被禁用
  - `totalItems` (`number`) - 总项目数
  - `itemsPerPage` (`?number=10`) - 每页的项目数， 如果小于1将在一页显示所有的项目数
  - `previousText` (`?string='上一页'`) - 上一页按钮显示的文本
  - `nextText` (`?string='下一页'`) - 下一页按钮显示的文本

### Outputs

#### Pagination

  - `numPages` - 总页数改变时触发, `$event:number` 等于总页数
  - `pageChanged` - 当前页改变时触发, `$event:{page, itemsPerPage}` 等于对象包括当前页（page）和每页项目数（itemsPerPage）
  
#### Pager

  - `numPages` - 总页数改变时触发, `$event:number` 等于总页数
  - `pageChanged` - 当前页改变时触发, `$event:{page, itemsPerPage}` 等于对象包括当前页（page）和每页项目数（itemsPerPage）

## Develop

	```shell
	npm install // 安装依赖包
	
	npm start // 启动项目
	```

# License

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)
