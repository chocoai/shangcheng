package com.gt.mall.entity.product;

import com.baomidou.mybatisplus.activerecord.Model;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import com.baomidou.mybatisplus.enums.IdType;
import lombok.Data;
import lombok.experimental.Accessors;

import java.io.Serializable;

/**
 * <p>
 * 商品参数表
 * </p>
 *
 * @author yangqian
 * @since 2017-07-20
 */
@Data
@Accessors( chain = true )
@TableName( "t_mall_product_param" )
public class MallProductParam extends Model< MallProductParam > {

    private static final long serialVersionUID = 1L;

    /**
     * 参数标识
     */
    @TableId( value = "id", type = IdType.AUTO )
    private Integer id;
    /**
     * 商品id   关联t_mall_product表的id
     */
    @TableField( "product_id" )
    private Integer productId;
    /**
     * 参数名称id  关联t_mall_specifica表的id
     */
    @TableField( "params_name_id" )
    private Integer paramsNameId;
    /**
     * 参数名称id  关联t_mall_specifica_value表的id
     */
    @TableField( "params_value_id" )
    private Integer paramsValueId;
    /**
     * 参数名称
     */
    @TableField( "params_name" )
    private String  paramsName;
    /**
     * 参数值
     */
    @TableField( "params_value" )
    private String  paramsValue;
    /**
     * 是否已经删除
     * 是否已经删除  0未删除   1删除
     */
    @TableField( "is_delete" )
    private Integer isDelete;
    /**
     * 排序 正序
     */
    private Integer sort;

    @Override
    protected Serializable pkVal() {
	return this.id;
    }

    @Override
    public String toString() {
	return "MallProductParam{" +
			"id=" + id +
			", productId=" + productId +
			", paramsNameId=" + paramsNameId +
			", paramsValueId=" + paramsValueId +
			", paramsName=" + paramsName +
			", paramsValue=" + paramsValue +
			", isDelete=" + isDelete +
			", sort=" + sort +
			"}";
    }
}
