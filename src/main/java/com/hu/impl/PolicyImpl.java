package com.hu.impl;

import java.io.ByteArrayInputStream;
import java.sql.Blob;
import java.util.List;

import javax.sql.rowset.serial.SerialBlob;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hu.dao.PolicyDAO;
import com.hu.entity.PolicyEntity;
import com.hu.service.PolicyService;
@Service
public class PolicyImpl implements PolicyService {

	@Autowired
	private PolicyDAO policyDAO;

	@Override
	public int count() {
		// TODO Auto-generated method stub
		return policyDAO.count();
	}

	@Override
	public List<PolicyEntity> all(PolicyEntity polic) {
		// TODO Auto-generated method stub
		int x=polic.getBegin();
		int y=(x-1)*polic.getPages();
		polic.setBegin(y);
		return policyDAO.all(polic);
	}

	@Override
	public int add(PolicyEntity polic) {
		// TODO Auto-generated method stub
		return policyDAO.add(polic);
	}

	@Override
	public PolicyEntity one(int plid) {
		// TODO Auto-generated method stub
		PolicyEntity one = policyDAO.one(plid);
		try
		{
			Blob xx=new SerialBlob(one.getPlremark());
			String note = null;
			//Blob----String
			if(xx != null)
			{
				ByteArrayInputStream bais = (ByteArrayInputStream)xx.getBinaryStream();
				byte[] byte_data = new byte[bais.available()]; //bais.available()返回此输入流的字节数
				bais.read(byte_data, 0,byte_data.length);//将输入流中的内容读到指定的数组
				note = new String(byte_data); //再转为String，并使用指定的编码方式
			}

			System.out.println(note);

			one.setContent(note);

		}
		catch (Exception e)
		{
			e.printStackTrace();
		}


		return  one;
	}

	@Override
	public int upd(PolicyEntity polic) {
		// TODO Auto-generated method stub
		return policyDAO.upd(polic);
	}



}
